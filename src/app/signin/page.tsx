"use client";

import React from "react";
import SigninLayout from "app/components/SigninLayout";
import axios from "axios";

function page (){
    return <div>
        <SigninLayout onClick={async (email, password)=> {
            const response = await axios.post("http://localhost:3000/api/admin", {
                email,
                password
            })
        }} name="SignIn" />
    </div>
}
export default page;