"use client";
import Image from "next/image";
import { useState } from "react";

export default function LetterTemplate() {

    const [text, setText] = useState('')


    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="p-5 border-4 border-green-600 text-center shadow-lg rounded-lg m-5">
                <Image
                className="object-contain inset-0 z-0 opacity-25"
                src="/christmas-tree.png"
                alt="christmas-tree"
                width={50}
                height={55}
                />
        <div className="overlay-content relative z-10 p-4">
            <form>
            <textarea 
                placeholder="Dear Santa..."
                rows={10}
                cols={15}
                className="p-1"
                />
            <button>
                <Image
                className="object-contain"
                src="/send-button.png"
                alt="send-button"
                width={70}
                height={55}
                />
            </button>
            </form>
        </div>
        </div>
    );
}
