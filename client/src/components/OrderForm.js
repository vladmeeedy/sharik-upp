import axios from 'axios';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';

const DatePickerField = ({ field, form }) => (
  <DatePicker
    {...field}
    selected={field.value}
    onChange={(date) => form.setFieldValue(field.name, date)}
    className="custom-datepicker"
    calendarClassName="custom-calendar"
    dateFormat="dd.MM.yy"
  />
);

const OrderForm = ({ onSubmit }) => {
  return (
    <div className="order-container">
      <h2 className="content__title">Покупатель</h2>
      <Formik
        initialValues={{
          telephone: '',
          email: '',
          firstName: '',
          lastName: '',
          city: '',
          address: '',
          deliveryDate: '',
        }}
        validationSchema={Yup.object().shape({
          telephone: Yup.string().required('*'),
          email: Yup.string()
            .matches(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'Неверный формат',
            )
            .required('*'),
          firstName: Yup.string()
            .max(25, 'Должно быть 25 символов или меньше')
            .min(2, 'Должно быть больше одного символа')
            .required('*')
            .matches(/^[^\p{P}\p{S}\d]+$/u, 'Неверный формат'),
          lastName: Yup.string()
            .max(25, 'Должно быть 25 символов или меньше')
            .min(2, 'Должно быть больше одного символа')
            .matches(/^[^\p{P}\p{S}\d]+$/u, 'Неверный формат'),
          city: Yup.string()
            .required('*')
            .max(30, 'Должно быть 30 символов или меньше')
            .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁ\s'.,-]+$/u, 'Неверный формат'),
          address: Yup.string()
            .required('*')
            .max(30, 'Должно быть 30 символов или меньше')
            .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁ0-9\s'.,-]+$/u, 'Неверный формат'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-container">
              <label htmlFor="telephone">Телефон</label>
              <Field type="tel" name="telephone" className="custom-input" />
              <ErrorMessage name="telephone" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="custom-input" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="firstName">Имя</label>
              <Field type="text" name="firstName" className="custom-input" />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="lastName">Фамилия</label>
              <Field type="text" name="lastName" className="custom-input" />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="city">Город</label>
              <Field type="text" name="city" className="custom-input" />
              <ErrorMessage name="city" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="address">Адрес</label>
              <Field type="text" name="address" className="custom-input" />
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>

            <div className="input-container-datepicker">
              <label htmlFor="deliveryDate">Дата</label>
              <Field name="deliveryDate" component={DatePickerField} />
              <ErrorMessage name="deliveryDate" component="div" className="error-message" />
            </div>

            <button type="submit" className="button pay-btn" disabled={isSubmitting}>
              Заказать
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
