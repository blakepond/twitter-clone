import { PhotographIcon } from "@heroicons/react/outline"
import { XIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"

function Input() {
    const [input, setInput] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef()

    const addImageToPost = () => {}

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3
        overflow-y-scroll `}>
            <img src="https://yt3.ggpht.com/L5osS_nevvgp3_3sHTpkp1vNZjjP8TN1UAJJZmJSFRyMToOpLktYPFe1d2OwgvSuAYRLvpfbGA=s88-c-k-c0x00ffffff-no-rj-mo"
            className="h-11 w-11 rounded-full cursor-pointer"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={``}>
                    <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    rows="2" 
                    placeHolder="What's happening?"
                    className="bg-transparent outline-none text-[#d9d9d9] 
                    text-lg placeholder-gray-500 tracking-wide w-full 
                    min-h-[50px]"
                    />

                {selectedFile && (
                    <div className="relative">
                        <div className="absolute w-8 h-8 bg-[#15181c] 
                        hover:bg-[#272c26] bg-opacity-75 rounded-full flex 
                        items-center justify-center top-1 left-1 cursor-pointer" 
                        onClick={()=> setSelectedFile(null)}>
                            <XIcon className="text-white h-5"/>
                        </div>
                        <img 
                        src={selectedFile} 
                        alt=""
                        className="rounded=2xl max-h-80 object-contain"
                        />
                    </div>
                )}
                </div>

                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div className="icon" onClick={()=>filePickerRef.current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                            <input 
                                type="file" 
                                hidden
                                onChanage={addImageToPost} 
                                ref={filePickerRef}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Input
