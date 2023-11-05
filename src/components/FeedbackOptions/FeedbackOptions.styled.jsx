import styled from '@emotion/styled'

export const BoxBtn = styled.ul`

    list-style: none;
    width: 500px;
    margin: 0;
    padding-left: 0;
    display: flex;
    justify-content: center;

    & li:not(:last-child){
        margin-right: 30px;
    }

`;
export const Button = styled.button`

    min-width: 90px;
    height: 30px;
    padding: 5px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: rgb(0 0 0) 2px 2px 2px;

    background-color: ${props => {


        switch(props.name) {
            case 'good':
            return '#32CD32';
            case 'neutral':
            return '#D2691E';
            case 'bad':
            return '#FF0000';
            default:
            return '#6495ED'
        }
    }};

    color: #FFFFFF;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        transform: scale(1.05);

    }


`;
