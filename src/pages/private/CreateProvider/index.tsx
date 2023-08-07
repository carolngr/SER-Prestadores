import Box from "@components/atoms/Box";
import { Grid } from "@components/atoms/grid";
import { Inputs } from "@components/molecules/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation, useQuery } from "react-query";
import { convertFileToBase64 } from "../../../utils/convertFileToBase64";
import { Buttons } from "@components/molecules/buttons";
import { AxiosError, AxiosResponse } from "axios";
import { IErrorResponse, ISuccessResponse } from "@interfaces/api";
import { useParams } from "react-router-dom";
import UserInformations from "@components/templates/UserInformations";
import { useEffect, useState } from "react";
import { TCreateProviderData, createProvider, findProviderById, updateProvider } from "@/services/api/provider";
import { useToast } from "@/stores/useToast";
import { form_validation } from "./schema";

export const CreateProvider = () => {

  const [profilePic,SetProfilePic] = useState()
  const { addToast } = useToast();
  const { id_provider } = useParams();
  const isNewRecord = id_provider === "new";

  const form = useForm<TCreateProviderData>({
    resolver: yupResolver(form_validation),
  });

  const previewFormData = form.watch();

  const fetchData = () => {

    if (!isNewRecord && id_provider) {

      findProviderById(id_provider).then(({ data }) => {
        data.id === undefined;
        SetProfilePic(data.profilePic)
        form.reset(data);
        return data;

      });
    }
  };

  const mutateReturns = {
    onSuccess: (success: AxiosResponse<ISuccessResponse, any>) => {
      addToast({
        title: success.data.success,
        type: "success",
      });
      form.reset();
      fetchData();
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      addToast({
        title: error.response?.data.error ?? "",
        type: "error",
      });
    },
  };

  const { mutate } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return createProvider(body);
    },
    ...mutateReturns,
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return updateProvider(body, id_provider ?? "");
    },
    onSuccess: mutateReturns.onSuccess,
    onError: mutateReturns.onError,
  });

  const handleSubmit = async (onValid: TCreateProviderData) => {
    const profilePicBase64: string = await convertFileToBase64(
      onValid.profilePic[0] as File
    );

    onValid.profilePic = profilePicBase64;

    console.log(onValid);

    isNewRecord ? mutate(onValid) : updateMutation(onValid);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid.Container columns={12}>
      <Grid.Item column={8}>
        <Box>
          <Grid.Container columns={12}>
            <Grid.Item column={12}>
              <h4>Informacoes pessoais</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                deserunt maiores deleniti fugit beatae laboriosam nemo, quaerat
                id et possimus obcaecati dolorum assumenda libero veritatis
                tempora eum illum, unde est.
              </p>
            </Grid.Item>


            <Grid.Item column={12}>
              <Inputs.File
                label="foto de perfil"
                isRequired
                form={form}
                name="profilePic"
                acceptFiles="image/*"
                onFileChange={(e) => {
                  convertFileToBase64(e.target.files?.[0]).then(
                    (pic) => {
                      SetProfilePic(pic);
                    }
                  );
                }}
              />
            </Grid.Item>

            <Grid.Item column={12}>
              <Inputs.Color 
                name="color" 
                isRequired 
                form={form} 
                label="Cor" 
              />
            </Grid.Item>

            <Grid.Item column={12}>
              <Inputs.Text
                label="nome completo"
                placeholder="Ex: Jhon Doe"
                isRequired
                form={form}
                name="name"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                label="numero de telefone"
                placeholder="43 999999999"
                isRequired
                form={form}
                name="phone"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                label="e-mail"
                placeholder="jhondoe@email.com"
                isRequired
                form={form}
                name="email"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                label="cpf"
                placeholder="000.000.000-00"
                isRequired
                form={form}
                name="cpf"
              />
            </Grid.Item>
            <Grid.Item column={12}>
              <Inputs.TextArea
                label="Bio"
                placeholder="escreva algo interessante sobre voce aqui..."
                isRequired
                form={form}
                name="bio"
              />
            </Grid.Item>
            <Grid.Item column={2}>
              <Buttons.Default
                text="Criar prestador"
                onClick={form.handleSubmit(handleSubmit)}
              />
            </Grid.Item>
          </Grid.Container>
        </Box>
      </Grid.Item>
      <Grid.Item column={4}>
        <UserInformations
          data={{
            bio: previewFormData.bio,
            email: previewFormData.email,
            name: previewFormData.name,
            phone: previewFormData.phone,
            picture: profilePic,
            background: previewFormData.color
          }}
        />
      </Grid.Item>
    </Grid.Container>
  );
};