import { Grid } from "@components/atoms/grid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { headers } from "./settings";
import { IPaginationRequest, IPaginationResponse } from "@/interfaces/api";
import { usePagination } from "@/hook/usePagination";
import { Buttons } from "@/components/molecules/buttons";
import { Inputs } from "@/components/molecules/inputs";
import Box from "@/components/atoms/Box";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useQueryString } from "@/hook/useQueryString";
import { IGetProvidersRequest, deleteProvider, getProviders } from "@/services/api/provider";
import { Table } from "@/components/molecules/Table";
import { IProvider } from "@/interfaces/models";
import { useToast } from "react-toastify";

interface IFormProps {
  name: string;
}

export const Providers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm<IPaginationRequest<IGetProvidersRequest>>();
  // const { addToast } = useToast();

  const [params, setParams] =
    useQueryString<IPaginationRequest<IGetProvidersRequest>>();

  const {mutate, isLoading} = useMutation({
    mutationFn: (provider_id: number) => deleteProvider(provider_id).then(res => res.data),
    onSuccess: (data) =>{
      alert(data.success);
      queryClient.invalidateQueries(["get_all_providers", JSON.stringify(params)])
    },
  });

  const addActionToProvidersList = (providers: IPaginationResponse<IProvider>) => {

    providers.docs = providers.docs.map(provider => ({
      ...provider,
      actions : (<Buttons.Default
                  text="Deletar"
                  size="sm"
                  startIcons="delete"
                  background="error"
                  onClick={() => mutate(provider.id)}
                  isLoading={isLoading}
                />)
    }))
    return providers;
  }

  const { data } = useQuery({
    queryKey: ["get_all_providers", JSON.stringify(params)],
    queryFn: () =>
      getProviders(params).then((res) => addActionToProvidersList(res.data)),
      staleTime: 0,
      cacheTime: 0,
  });

  const { nextPage, prevPage, currentPageList } = usePagination(
    data?.total ?? 0
  );

  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Buttons.Default
            text="Novo prestador"
            size="md"
            endIcon="person_add_alt"
            background="primary"
            onClick={() => navigate("/CreateProvider/new")}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search
            type="Search"
            form={form}
            name="filter"
            placeholder="Pesquise por um usuario"
            handleClick={(text) => setParams({ filterName: text })}
          />
          {/* <Buttons.Default text="voltar" onClick={prevPage} />
          <Buttons.Default text="proximo" onClick={nextPage} /> */}
        </Grid.Item>
        <Grid.Item column={12}>
          <Box>
            <Table
              columns={headers}
              rows={data?.docs ?? []}
              rowsProps={{
                keyExtractor: (item) => item.id,
                rowAction: (item) => navigate(`/CreateProvider/${item.id}`),
                total: data?.total,
              }}
            />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </>
  );
};