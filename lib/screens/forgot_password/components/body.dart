import 'package:flutter/material.dart';
import 'package:e_commerce/constant.dart';
import 'package:e_commerce/screens/forgot_password/components/forgot_password_form.dart';
import 'package:e_commerce/size_config.dart';

class Body extends StatelessWidget {
  const Body({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: getPropScreenWidth(20)),
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(
                height: SizeConfig.screenHeight * 0.04,
              ),
              Text(
                "Forgot Password",
                style: TextStyle(
                    fontSize: getPropScreenWidth(28),
                    color: Colors.black,
                    fontWeight: FontWeight.bold),
              ),
              const Text(
                "Please enter youre email and we will send \nyou a link to return to your account",
                textAlign: TextAlign.center,
              ),
              SizedBox(
                height: SizeConfig.screenHeight * 0.06,
              ),
              const ForgotPasswordForm(),
              SizedBox(
                height: SizeConfig.screenHeight * 0.06,
              ),
              dontHaveAccountText()
            ],
          ),
        ),
      ),
    );
  }

  Row dontHaveAccountText() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text("Don't have an account? "),
        GestureDetector(
            onTap: () {},
            child:
                const Text("Sign Up", style: TextStyle(color: kPrimaryColor))),
      ],
    );
  }
}
