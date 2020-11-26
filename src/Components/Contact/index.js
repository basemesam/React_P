import React from 'react';
import Footer from './../Footer';
import {Drop, DropTitle, DropTitleSpan, DropForm, Input, InputText, InputEmail, InputSubmit, FormInput, Textarea} from './style';

const Contact = () => {
    return (
       <React.Fragment>
        <Drop>
            <div className="container">
                <DropTitle><DropTitleSpan>Drop </DropTitleSpan>Me A line</DropTitle>
                <DropForm action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <Input type="text" sub placeholder="Your Subject"  />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </DropForm>
            </div>
        </Drop>
        <Footer />
      </React.Fragment> 
    )
}

export default Contact;