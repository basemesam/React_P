import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProfileSkills, ProfileSection, ProfileTitle, ProfileTitleSpan, ProfileList, ProfileItem, ProfileItemSpan, Skills, SkillsTitle, SkillsTitleSpan, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, BarParentSpan} from './style';

const Profile = () => {



    const [Skill, setSkill] = useState([])

    useEffect(() => {

        axios.get('js/data.json').then(res => { setSkill(res.data.profile) })

    }, [])

    const ListSkills = Skill.map(ItemSkill => {
        return (
            <Bar key={ItemSkill.id}>
            <BarTitle>{ItemSkill.skill_name}</BarTitle>
            <BarPerc>{ItemSkill.width}</BarPerc>
            <BarParent>
                <BarParentSpan percent={ItemSkill.skill_name}></BarParentSpan>
            </BarParent>
        </Bar>

        )
    })


    return (
        <ProfileSkills>
        <div className="container">
            <ProfileSection>
                <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                <ProfileList>
                    <ProfileItem>
                        <ProfileItemSpan>Name</ProfileItemSpan>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Birthday</ProfileItemSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Address</ProfileItemSpan>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Phone</ProfileItemSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Email</ProfileItemSpan>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileItemSpan>Website</ProfileItemSpan>
                        <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileSection>
             
            <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {ListSkills}
                    
                </Skills>


        </div>
    </ProfileSkills>
    )
}

export default Profile;