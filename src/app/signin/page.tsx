"use client";

import React from "react";
import SigninLayout from "app/components/SigninLayout";
import axios from "axios";

function page (){
    return <div>
        <SigninLayout onClick={async (email, password)=> {
            const response = await axios.post("api/signup", {
                email,
                password
            });
            localStorage.setItem("token", response.data.token);
        }} name="SignIn" />
    </div>
}
export default page;