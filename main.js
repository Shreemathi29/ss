import React from 'react'

 class  main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data1:props.bgcolor,
            data2:props.progress,
            data3:props.height,

        }
    }
   render() {
//const main = ({bgcolor,progress,height}) => { 
 return ( 

        <div style = {{
              

                height: height, 
        
                width: '100%', 
        
                backgroundColor: 'whitesmoke', 
        
                borderRadius: 40, 
        
                margin: 50 
        
              
        }}> 
    
          <div style={{  height: '100%', 

width: `${this.props.data2}%`, 

backgroundColor: bgcolor, 

borderRadius:40, 

textAlign: 'right'
}}> 
    
            <span style={{
                padding: 10, 

                color: 'black', 
        
                fontWeight: 900 
        
            }
            
            
            }>{`${this.props.data2}%`}</span> 
    
          </div> 
    
        </div> 
    
        ) 
    } 
    
}
//}
    
    export default main;  