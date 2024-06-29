import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

import styled from 'styled-components';

const StyledForm = styled(Form)`
  background: white;
  padding: 2rem;
`;

const FormButton = styled(Button)`
  background: #2a5965;
  color: #fff;
  padding: 8px 24px;
  margin: 16px;
  margin-bottom: -6px;
  font-size: 16px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  line-height: 1;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
  }
`;

const CenteredButtonContainer = styled.div`
  text-align: center;
`;

const PotentialTenantForm = ({ handleFormModalClose }) => {
  const { flatId } = useParams();
  const [uid, setUid] = useState('');

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const flatDoc = await getDoc(doc(db, 'flats', flatId));
        if (flatDoc.exists()) {
          const flatData = flatDoc.data();
          setUid(flatData.uid);
        } else {
          console.error('Flat document not found');
        }
      } catch (error) {
        console.error('Error fetching flat data:', error);
      }
    };

    fetchFlatData();
  }, [flatId]);

  const onFinish = async (values) => {
    try {
      const formData = {
        name: values.name || '',
        surname: values.surname || '',
        personalId: values.personalId || '',
        email: values.email || '',
        phone: values.phone || '',
        adress: values.adress || '',
        uid: uid, // Presuming uid always has a value by this point
      };

      await fetch(
        `https://us-central1-flats-af6d2.cloudfunctions.net/potentialTenantTrigger?flatId=${flatId}`,
        {
          method: 'GET',
        }
      );
      // Adding the potential tenant to the potential_tenants collection
      await addDoc(collection(db, 'potential_tenants'), formData);
      handleFormModalClose();
    } catch (error) {
      console.error('Error adding potential tenant: ', error);
      alert('Sistemos klaida, bandykite dar kartą.');
    }
  };

  return (
    <>
      <StyledForm
        name="potential_tenants"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Vardas"
          name="name"
          rules={[{ required: true, message: 'Įrašykite vardą!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pavardė"
          name="surname"
          rules={[{ required: true, message: 'Įrašykite vardą!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Asmens kodas" name="personalId">
          <Input />
        </Form.Item>

        <Form.Item
          label="El. pašto adresas"
          name="email"
          rules={[
            { required: true, message: 'Įrašykite paštą!' },
            { type: 'email', message: 'Neteisingas formatas!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tel. Nr."
          name="phone"
          rules={[{ required: true, message: 'Įrašykite numerį!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Adresas" name="adress">
          <Input />
        </Form.Item>
        <CenteredButtonContainer>
          <Form.Item>
            <FormButton type="primary" htmlType="submit">
              Siųsti
            </FormButton>
          </Form.Item>
        </CenteredButtonContainer>
      </StyledForm>
    </>
  );
};

export default PotentialTenantForm;
