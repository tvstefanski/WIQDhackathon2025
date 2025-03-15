import React from "react";
import SceneTemplate from "../components/SceneTemplate";

function Childhood() {
  return (
    <SceneTemplate
      title="Childhood"
      image="/images/childhood.jpg"
      conversations={[
        { 
          text: "Mama, where is papa?", 
          choices: [{ text: "Ask Mama", next: 2 }] 
        },
        { 
          text: "Papa is at work, baby girl.", 
          choices: [{ text: "Why does Papa work but you don’t?", next: 3 }] 
        },
        { 
          text: "Because that's how things are, my love.", 
          choices: [{ 
            text: "Accept it", 
            next: { 
              title: "The Gender Work Gap", 
              image: "/images/motherhood.png", 
              description: "Source: The Child Penalty Atlas https://www.nber.org/papers/w31649",
              nextScene: "/youth" 
            } 
          }] 
        }
      ]}
    />
  );
}

export default Childhood;
