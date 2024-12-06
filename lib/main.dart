import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:device_preview/device_preview.dart'; // Import Device Preview
import 'package:e_commerce/components/costum_navigation_bar.dart';
import 'package:e_commerce/routes.dart';
import 'package:e_commerce/screens/splash/splash_screen.dart';
import 'package:e_commerce/state_managements/auth_provider.dart';
import 'package:e_commerce/state_managements/cart_provider.dart';
import 'package:e_commerce/state_managements/favorite_provider.dart';
import 'package:e_commerce/state_managements/theme_provider.dart';
import 'package:e_commerce/theme.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SharedPreferences prefs = await SharedPreferences.getInstance();
  bool isLoggedIn = prefs.getBool("isLoggedIn") ?? false;

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => AuthProvider()),
        ChangeNotifierProvider(create: (context) => ThemeProvider()),
        ChangeNotifierProvider(create: (context) => CartProvider()),
        ChangeNotifierProvider(create: (context) => FavoriteProvider()),
      ],
      child: DevicePreview( // Bungkus aplikasi dengan DevicePreview
        builder: (context) => MainApp(isLoggedIn: isLoggedIn),
      ),
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp({super.key, required this.isLoggedIn});

  final bool isLoggedIn;

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (context, theme, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          useInheritedMediaQuery: true, // Wajib untuk DevicePreview
          locale: DevicePreview.locale(context), // Gunakan locale simulasi
          builder: DevicePreview.appBuilder, // Builder untuk simulasi UI
          initialRoute: isLoggedIn
              ? CustomNavigationBar.routeName
              : SplashScreen.routeName,
          theme: themeData(theme.isDarkMode),
          routes: routes,
        );
      },
    );
  }
}
