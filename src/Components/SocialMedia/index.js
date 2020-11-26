import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SocialSection, Social, Icon, P, PSpan} from './style';

const SocialMedia = () => {

   const [Socials, setSocial] = useState([]);

    useEffect(() => {

        axios.get('js/data.json').then(res => {setSocial(res.data.social)})

    }, [])

    const ListSocial = Socials.map(Item => {
        return (
            <Social id={Item.id} key={Item.id}>
            <Icon className={Item.icon}></Icon>
            <P>
                <PSpan>{Item.title}</PSpan>
                <PSpan normal>{Item.body}</PSpan>
            </P>
           </Social>

        )
    })



    return (
      <SocialSection>  
          {ListSocial}
      </SocialSection>
    )
}

export default SocialMedia;