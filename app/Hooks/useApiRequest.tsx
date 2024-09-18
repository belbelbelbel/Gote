"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { isFormFilled } from '../Utils/@types'
import { useRouter } from 'next/navigation'

export const useApiRequest = () => {
  const [isloading, setisloading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const Router = useRouter()
  
    const makeRequest = async ( url: any, formData: any, filledForm: any) => {
      const isFilledForm = isFormFilled(filledForm);
      setisloading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!isFilledForm) {
          toast.error("please fill in all form")
          return;
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse)
        setData(jsonResponse);

        if (!response.ok) {
          toast.error(`HTTP error! status: ${response.status}`);
        }
        else {
          Router.push('/')
          toast.success('Logged in successfully')
        
        }
      }

      catch (err: any) {
        setError(err.message);
      }

      finally {
        setisloading(false);
      }
     
    }

    return { isloading, data, error, makeRequest }
}
