package com.example.melofi

import android.renderscript.Sampler
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.ui.text.input.PasswordVisualTransformation


@Composable
fun LoginScreen(){
    var username by remember {
        mutableStateOf(value = "")
    }
    var password by remember {
        mutableStateOf(value = "")
    }
    Image(
        painter = painterResource(R.drawable.background),
        contentDescription = "background image",
        modifier = Modifier.fillMaxSize(),
        contentScale = ContentScale.Crop
    )
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally

    )
    {
        Text(
            text = "MeloFi",
            fontFamily = dotoFontFamily,
            fontSize = 50.sp,
            color = Color.White,
        )

        OutlinedTextField(value = username, onValueChange = {
            username = it
        }, label = {
            Text(text = "Username", color = Color.White)
        },
            colors = androidx.compose.material3.OutlinedTextFieldDefaults.colors(
                focusedTextColor = Color.White,
            ))


        Spacer(modifier = Modifier.size(10.dp))

        OutlinedTextField(value = password, onValueChange = {
            password = it
        }, visualTransformation= PasswordVisualTransformation(),
            label = {
            Text(text = "Password",color = Color.White)
        },colors = androidx.compose.material3.OutlinedTextFieldDefaults.colors(
                focusedTextColor = Color.White,
            ))

        Spacer(modifier = Modifier.size(10.dp))

        Button(onClick = { /*TODO*/ }) {
            Text(text = "Login")
        }

        Spacer(modifier = Modifier.size(10.dp))

        Text(text = "Don't have an account?create one",
            modifier = Modifier.clickable{

            },
            color = Color.White)
    }

}
