import 'package:flutter/material.dart';
import 'package:e_commerce/components/my_default_button.dart';
import 'package:e_commerce/constant.dart';
import 'package:e_commerce/screens/sign_in/sign_in_screen.dart';
import 'package:e_commerce/size_config.dart';


class Body extends StatefulWidget {
  @override
  _BodyState createState() => _BodyState();
}

class _BodyState extends State<Body> {
  int currentPage = 0;
  List<Map<String, String>> splashData = [
    {
      "text": "Welcome to Tokoku, Let’s shop!",
      "image": "assets/images/splash_1.png"
    },
    {
      "text": "We help people connect with stores \naround Indonesia",
      "image": "assets/images/splash_2.png"
    },
    {
      "text": "We show the easy way to shop. \nJust stay at home with us",
      "image": "assets/images/splash_3.png"
    },
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
        width: double.infinity,
        child: Stack(
          children: <Widget>[
            // Fullscreen background image
            Positioned.fill(
              child: Image.asset(
                splashData[currentPage]["image"]!,
                fit: BoxFit.cover, // Cover the entire screen
              ),
            ),
            // Background overlay for better text visibility
            Positioned.fill(
              child: Container(
                color: Colors.black.withOpacity(0.5), // Semi-transparent overlay
              ),
            ),
            Column(
              children: <Widget>[
                Expanded(
                  flex: 3,
                  child: PageView.builder(
                    onPageChanged: (value) {
                      setState(() {
                        currentPage = value;
                      });
                    },
                    itemCount: splashData.length,
                    itemBuilder: (context, index) => Container(
                      color: Colors.transparent, // Transparent container to keep layout
                    ),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: getPropScreenWidth(20)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        // Main title with primary color
                        Text(
                          "TokuKu",
                          style: TextStyle(
                            fontSize: getPropScreenWidth(36),
                            color: kPrimaryColor, // Set to primary color
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 5), // Reduced space between title and subtitle
                        // Original subtitle with smaller and thinner font
                        Text(
                          splashData[currentPage]['text']!,
                          style: TextStyle(
                            fontSize: getPropScreenWidth(16), // Smaller font size
                            color: Colors.white, // Changed to white for better visibility
                            fontWeight: FontWeight.w300, // Thinner font weight
                          ),
                        ),
                        Spacer(flex: 1), // Reduced space between subtitle and button
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            // Button
                            SizedBox(
                              width: getPropScreenWidth(120),
                              child: MyDefaultButton(
                                text: "Continue",
                                press: () {
                                  Navigator.pushNamed(
                                      context, SignInScreen.routeName);
                                },
                              ),
                            ),
                            // Indicator on the right
                            Row(
                              children: List.generate(
                                splashData.length,
                                (index) => buildDot(index: index),
                              ),
                            ),
                          ],
                        ),
                        Spacer(), // Space below the button
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  AnimatedContainer buildDot({int? index}) {
    return AnimatedContainer(
      duration: kAnimationDuration,
      margin: EdgeInsets.only(right: 5),
      height: 6,
      width: currentPage == index ? 20 : 6,
      decoration: BoxDecoration(
        color: currentPage == index ? kPrimaryColor : Color(0xFFD8D8D8),
        borderRadius: BorderRadius.circular(3),
      ),
    );
  }
}