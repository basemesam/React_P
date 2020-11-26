import styled from 'styled-components';


export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection = styled.div`
    width: 50%;
    float: left;
`

export const ProfileTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
`

export const ProfileTitleSpan = styled.span`
  font-weight: normal;
`

export const ProfileList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ProfileItem = styled.li`
    margin-bottom: 8px
`

export const ProfileItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight:  ${props => props.web ? 'normal' : 'bold' };
    color: ${props => props.web ? '#eb5424' : ' ' };
`

export const Skills = styled.div`
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle = styled.span`
    float: left;
`

export const BarPerc = styled.span`
    float: right;
    margin-right: 100px
`

export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`


export const BarParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.percent == "Bootstrap" ? '100%' : ''};
    width: ${props => props.percent == "CSS3" ? '80%' : ''};
    width: ${props => props.percent == "JS" ? '60%' : ''};
`

export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const SkillsTitleSpan = styled.span`
    font-weight: normal;
`