import Box from '@/components/atoms/Box';
import { Grid } from '@/components/atoms/grid';
import { Buttons } from '@/components/molecules/buttons';
import { Inputs } from '@/components/molecules/inputs';
import { Button } from '@/components/molecules/inputs/Text/styles';
import { ISignInProps, useAuth } from '@/stores/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import { useToast } from '@/stores/useToast';

const SignIn: React.FC = () => {
  const {} = useToast()
  const { signIn, isLoading } = useAuth();

  const form = useForm<ISignInProps>();

  const handleSignIn = (data: ISignInProps) => {
    signIn(data);
  };

  return (
    <Container>
    <Box>
      <Grid.Container columns={1}>
        <Inputs.Text form={form} name="email" label="E-mail" />
        <Inputs.Text form={form} name="password" label="Password" />
        <Buttons.Default text="Sign in" isLoading={isLoading} onClick={form.handleSubmit(handleSignIn) }/>
      </Grid.Container>
    </Box>
    </Container>
  )
}

export default SignIn;