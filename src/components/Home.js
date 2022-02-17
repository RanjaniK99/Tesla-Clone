import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
    return (
        <Container>
            <Section 
                title="Model S" 
                description="Order Online for Touchless Delivery"
                backgorundImg="model-s.jpg"
                leftButton= "Custom order"
                rightButton="Existing Inventory"   
             />
            <Section 
               title="Model Y" 
               description="Order Online for Touchless Delivery"
               backgorundImg="model-y.jpg"
               leftButton= "Custom order"
               rightButton="Existing Inventory" 
            />
            <Section
               title="Model 3" 
               description="Order Online for Touchless Delivery"
               backgorundImg="model-3.jpg"
               leftButton= "Custom order"
               rightButton="Existing Inventory"  
            />
            <Section 
               title="Model x" 
               description="Order Online for Touchless Delivery"
               backgorundImg="model-x.jpg"
               leftButton= "Custom order"
               rightButton="Existing Inventory"  
            />
            <Section 
               title="Lowest Cost Solar Panels in America" 
               description="Money-back guarantee"
               backgorundImg="solar-panel.jpg"
               leftButton= "Order now"
               rightButton="Learn more"  
            />
            <Section 
               title="Solar for New Roofs" 
               description="Solar Roof Costs Less Than a New"
               backgorundImg="solar-roof.jpg"
               leftButton= "Order now"
               rightButton="Learn more"  
            />
            <Section 
               title="Accessories" 
               description=""
               backgorundImg="accessories.jpg"
               leftButton= "Shop now"  
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
   yaheight:100vh;
`