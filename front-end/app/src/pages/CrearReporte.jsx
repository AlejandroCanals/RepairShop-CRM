import { Content } from '../components/content';
import { CreateForm } from '../components/createForm';
import {useForm} from 'react-hook-form';
import { createRma } from '../api/rmas.api';
import {useNavigate} from 'react-router-dom';

export function RmaForm() {

  return (

    <Content>  
      <CreateForm/>
    </Content>  
  );
}
