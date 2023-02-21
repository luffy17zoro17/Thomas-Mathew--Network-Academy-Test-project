


const InputProp = ({inputPlaceholder,inputClassN,
      inputDivClassN}) => {
    return (
       <div className={inputDivClassN}>
         <input
           placeholder={inputPlaceholder}
           className={inputClassN}
         />
       </div> 
    );
}

export default InputProp;