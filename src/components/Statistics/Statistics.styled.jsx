import styled from '@emotion/styled'

    export const Container = styled.ul`
        list-style: none;
        margin: 0;
        padding-left: 0;

        font-family: 'Roboto Slab', sans-serif;
        font-size: 20px;
        font-weight: 500;

        & li{
            margin-bottom: 10px;
        }


    `;

    export const Option = styled.span`

        margin-right: 5px;
        color: #2d2d2d;
  
    `;

    export const Value = styled.span`

        color: ${props => {

            switch(props.name) {
            case 'good':
            return '#32CD32';
            case 'neutral':
            return '#D2691E';
            case 'bad':
            return '#FF0000';
            case 'total':
            return '#00008B';
            case 'positivePercentage':
                if(parseInt(props.children) >= 75) return '#006400';
                if(parseInt(props.children) < 75 && parseInt(props.children) >= 50  ) return '#D2691E';
                if(parseInt(props.children) < 50) return '#FF0000';
                break;
            
            default:
            return '#6495ED'
            }
        }};

          

    `;
