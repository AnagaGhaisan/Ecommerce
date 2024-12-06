// splash_content.dart

import 'package:flutter/material.dart';
import '../../../size_config.dart';

class SplashContent extends StatelessWidget {
  const SplashContent({
    Key? key,
    this.image,
  }) : super(key: key);
  final String? image;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Spacer(flex: 2), // Add space at the top
        Padding(
          padding: EdgeInsets.only(bottom: 20), // Add space below the image
          child: Image.asset(
            image!,
            height: getPropScreenHeight(265),
            width: getPropScreenWidth(235),
          ),
        ),
        Spacer(flex: 1), // Add more space below the image
      ],
    );
  }
}