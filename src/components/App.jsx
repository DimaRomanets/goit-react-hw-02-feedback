import {Component} from "react";

import  Statistics  from "components/Statistics";
import Notification  from "components/Notification";
import Section from "components/Section";
import FeedbackOptions from "./FeedbackOptions";




class App extends Component {
        
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };



  handlClickButton =(e)=>{
    
    let buttonName = e.target.name;
        
      if(buttonName){
        this.setState(prevState => 
          
        ({ [buttonName]: prevState[buttonName] +1})
        
      )};
  };

  countTotalFeedback = () => {

    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };


  countPositiveFeedbackPercentage =() =>{

    const totalFeedback = this.countTotalFeedback();
    const {good} = this.state;
    let result = 0;

    if(totalFeedback >0) {

       result = Math.ceil((good/totalFeedback)*100);
    }
    
    return `${result}%`;
    
  }

  

  render() {
    
    const {good, neutral, bad} = this.state; 
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage ();
    const countTotalFeedback = this.countTotalFeedback();
    const handlClickButton = this.handlClickButton;
    const feedbackBtn = Object.keys(this.state);
    
    
    
    return (
      <div>
        <div>
          <Section title="Please leave feedback" >
          {<FeedbackOptions nameBtn = {feedbackBtn} handlClickButton = {handlClickButton}></FeedbackOptions>}
          </Section>
        </div>

        <div>
          <Section title="Statistics" >
            {countTotalFeedback > 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            ) :
            <Notification message={"There is no feedback"}/>}
          </Section>
        </div>
      </div>
    )
  }

};

export default App;