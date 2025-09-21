"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./page.module.css";
import CustomTextInput from '@/app/components/CustomTextInput/CustomTextInput';
import CustomAreaTextInput from '@/app/components/CustomTextAreaInput/CustomTextAreaInput';
import ButtonStyles from "@/app/globalStyles/buttonStyles.module.css"
import { myFont } from '@/app/layout';
import shadowStyles from "@/app/globalStyles/containerShadowStyles.module.css"

export default function page() {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [media, setMedia] = useState<File[]>([]);
const fileInputRef = useRef<HTMLInputElement>(null);



  useEffect(() => {
    setTitle(localStorage.getItem("title") || "");
    setDescription(localStorage.getItem("description") || "");
  }, []);
  
  
  const saveDraft = () => {
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
  }


  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMedia([...media, ...Array.from(e.target.files)]); // add new files to state
    }
  };


  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div className={`${styles.createPostContainer} ${shadowStyles.containerShadow}`}>
      <h2 className={myFont.className}>Create post</h2>
      <CustomTextInput onChange={(e) => setTitle(e.target.value)} value={title} label="Title" />
      <CustomAreaTextInput onChange={(e) => setDescription(e.target.value)} value={description} label='Description' />
          

      <div className={styles.buttonContainer}>
        <button onClick={handleButtonClick} className={`${ButtonStyles.primary_button} ${myFont.className}`}>Add Media</button>
          <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{display: "none"}}
              onChange={handleMediaChange}
            />
        <button onClick={saveDraft} className={`${ButtonStyles.primary_button} ${myFont.className} ${styles.saveDraftButton}`}>Save Draft</button>
        <button className={`${ButtonStyles.primary_button} ${myFont.className}`}>Post</button>
      </div>
    </div>
  )
}
