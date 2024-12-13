import React from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { useState } from "react";
import { options2, options3, options4, options5, groupedOptions } from "./formdata2";



const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};




export default function Example({ handleChange, handleOptionText }) {

    const [selectedOptions, setSelectedOptions] = useState({
        typesofproduce: [],
        supplyfrequency: null,
        distributionchannels: null,
        additionalofferings: [],
        referralsource: [],
    });
    const [otherText, setOtherText] = useState('');

    const handleSelectChange = (name) => (selectedOption) => {
        setSelectedOptions((fields) => ({
            ...fields,
            [name]: selectedOption,
        }));
        handleChange({ ...selectedOptions, [name]: selectedOption });
    };

    // const handleSelectChange = (selected) => {
    //     handleChange({ typesofproduce: selected }); // Adjust based on your requirements
    // };

    
    const handleTextChange = (e) => { 
       
        handleOptionText(e, setOtherText);
    }

    return (

        <>

            <label className='font-bold' htmlFor='produce1'>
                Types of Produce  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce1"
                options={groupedOptions}
                isMulti={true}
                
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                   Option
                }}
                placeholder=" What types of fruits and vegetables do you grow on your farm?"
                onChange={handleSelectChange('typesofproduce')}
                allowSelectAll={true}
                value={selectedOptions.typesofproduce}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required />

            <p className='text-[0.7rem]'>Indicate in the input field above if you don't see your category here</p><br />

            <label className='font-bold' htmlFor='produce2'>
                Supply Frequency  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce2"
                options={options2}
                isMulti={false}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}

                placeholder="How often do you supply fruits and vegetables to buyers/businesses?"
                onChange={(selectedOption) => {
                    handleSelectChange('supplyfrequency')(selectedOption);
                    if (selectedOption?.value !== 'others') {
                        setOtherText(''); // Clear the text input if another option is selected
                    }
                }}
                allowSelectAll={true}
                value={selectedOptions.supplyfrequency}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />

            {selectedOptions.supplyfrequency?.value === 'others' && (
                <div>
                    <p className='text-[0.7rem]'>Indicate here if you don't see your category above</p>
                    <label className='font-bold' htmlFor="other">Please specify:</label>
                    <input className='bg-[#dcd6ec99] mt-3 mb-6 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        id="other"
                        name="other"
                        value={otherText.other}
                        onChange={handleTextChange}
                    /> 
                </div> 
            )} 



            <label className='font-bold' htmlFor='produce3'>
                Distribution Channels  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce3"
                options={options3}
                isMulti={false}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}

                placeholder="How do you currently distribute your produce?"
                onChange={handleSelectChange('distributionchannels')}
                allowSelectAll={true}
                value={selectedOptions.distributionchannels}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />


            <label className='font-bold' htmlFor='produce4'>
                Additional Offerings  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce4"
                options={options4}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                placeholder="Do you offer any additional services or products related to your farm?"
                onChange={handleSelectChange('additionalofferings')}
                allowSelectAll={true}
                value={selectedOptions.additionalofferings}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />

<label className='font-bold' htmlFor='produce5'>
               Referral Source  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce5"
                options={options5}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                placeholder="How did you hear about us?"
                onChange={handleSelectChange('referralsource')}
                allowSelectAll={true}
                value={selectedOptions. referralsource}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />
        </>
    );
}

 // const [selectedOptions2, setSelectedOptions2] = useState([]);
    // const [otherText, setOtherText] = useState('');

    // const handleSelectChange2 = (selectedOptions2) => {
    //     setSelectedOptions2(selectedOptions2);
    //     if (selectedOptions2.value !== 'others') {
    //         setOtherText(''); // Clear the text input if another option is selected
    //     } 
    //     handleChange(selectedOptions2);
    // };
    // const handleTextChange = (e) => { 
       
    //     handleChange2(e, setOtherText);
    // }

    // const [selectedOptions3, setSelectedOptions3] = useState([]);

    // const handleSelectChange3 = (selectedOptions3) => {
    //     setSelectedOptions3(selectedOptions3);
    //     handleChange(selectedOptions3)
    // };

    // const [selectedOptions4, setSelectedOptions4] = useState([]);

    // const handleSelectChange4 = (selectedOptions4) => {
    //     setSelectedOptions4(selectedOptions4);
    //     handleChange(selectedOptions4)
    // };

    // fruits: [
    //     'mango',
    //     'pawpaw'
    // ],
    // vegetables: [
    //     'carrot',
    //     'sweetpotatoes'
    // ],
    // fruityvegetables

