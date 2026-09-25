# Privacy Policy — Pebbix

> This is an English translation provided for convenience. In case of any discrepancy, the Korean version prevails.

- **Effective date:** 2026-09-25
- **Publisher:** donminzzi lab, represented by Dongmin Yu (the "Developer")
- **Contact:** ydm2790@gmail.com

This policy applies to the mobile game Pebbix (the "Service"), provided by the Developer.
It also covers the information the Developer processes when you visit the official website at [pebbix.donminzzi.kr](https://pebbix.donminzzi.kr) (the "Website").

## 1. Overview

The Service requires no account and no sign-in, and the Developer operates no server of their own.
The Developer does not sell your personal information.

Some distributed versions use Google AdMob to serve ads. Versions with Firebase Crashlytics use it to diagnose crashes and errors.
The information described in section 3 is processed on Google's infrastructure under Google's applicable terms and privacy policy.

## 2. Information stored on your device

The following values are written to the app's local storage and are not sent to the Developer by Pebbix.

- Settings: whether music, sound effects and haptics are enabled
- Game record: your best score
- Progress: whether the tutorial has begun, and whether it has been completed
- Purchase cache, in versions with purchases: whether the ad-removal product is owned

Uninstalling the app removes the active copy of these values from the app's storage.
Your operating system's backup or device-transfer features may retain a platform-managed copy and restore it when you reinstall the app, depending on your device and account settings.
Pebbix does not send that copy to the Developer.
In versions with purchases, purchase state is held by the store and can be recovered through Restore Purchases after reinstalling.

## 3. Advertising and crash diagnostics

### Advertising (Google AdMob)

Versions with advertising serve rewarded and interstitial ads through Google AdMob and use Google User Messaging Platform (UMP) for consent. Ad-free versions do not request ads or start the UMP consent flow. The SDK packages remain included in the app. When those services run, Google may collect and process the following.

- Advertising identifiers when device settings and platform permissions make them available, such as the Android Advertising ID or iOS IDFA
- Other device or app identifiers (such as the Android app set ID)
- Approximate location inferred from your IP address
- Device and app information (model, OS version, app version)
- Usage records such as app launches, taps, video views, ad impressions and clicks
- SDK crash, performance and diagnostic information such as launch time, hang rate and energy use

In versions that offer the ad-removal product, players who purchase it are not shown forced interstitial ads. Rewarded ads remain available by the player's own choice, and the information above is processed the same way when one is watched.

See the [Google Privacy Policy](https://policies.google.com/privacy) for details.

### Crash diagnostics (Firebase Crashlytics)

Android and iOS versions with Firebase Crashlytics use it to find and fix crashes and other app errors. Those versions enable Crashlytics collection without a separate in-app switch.
Google processes the reports on Firebase infrastructure, and the Developer can review them in Firebase Console.
Reports and related Firebase Installations and Sessions data may include:

- Crash and developer-reported non-fatal error stack traces, with relevant app state
- A Crashlytics installation UUID and Firebase installation ID
- Session identifiers and timestamps, app version, device model and operating system information

Firebase Analytics collection is disabled in the Crashlytics-enabled release, so Pebbix does not send gameplay events through Firebase Analytics. Advertising data processing in versions with ads is separate from that setting.
See [Firebase Privacy and Security](https://firebase.google.com/support/privacy) for details.

## 4. Ad consent

Versions with advertising collect consent for personalised ads through UMP. Where consent is required, the form is shown on first launch, and no ad is requested before it is answered.
When the Service refreshes consent information, UMP sends Google app and device information, approximate location inferred from the request's IP address, and stored consent signals to provide the consent flow.

In versions with advertising, you can reopen that choice from **Privacy options** in the settings screen, and change or withdraw it. The row appears according to regional requirements; withdrawing consent immediately discards any ad already loaded.

Declining or withdrawing consent does not restrict gameplay.

## 5. In-app purchases

Versions with advertising may offer an ad-removal product where the relevant store makes it available. Ad-free versions do not offer this product or connect to the store for it.
Payment is handled by the Apple App Store or Google Play, and **neither the app nor the Developer collects or sees any payment method or payment details.**
On the device, the app receives the product ID, localised price, purchase or restore status and store-provided verification data.
This information is not transmitted to a Developer-operated server, and the app stores only whether the ad-removal product is owned.

Payment information is handled under the privacy policy of the respective store.

## 6. Retention

The active app copy of values stored on your device is deleted when you uninstall the app.
Platform-managed backup or device-transfer copies may remain under your operating system and account settings and may be restored after reinstalling.
Pebbix does not receive those copies.
Information collected through AdMob in versions where it runs is retained under Google's applicable policies.
Firebase says Crashlytics keeps crash traces and their associated identifiers, including the Crashlytics installation UUID and Firebase installation ID in those reports, for 90 days before beginning their removal from live and backup systems.
That 90-day period does not cover records processed separately by Firebase Installations or Sessions.
Google says data tied to a Firebase installation ID is removed from live and backup systems within 180 days after that ID is deleted; its [Firebase Sessions disclosure](https://firebase.google.com/docs/android/play-data-disclosure#firebase_sessions) does not specify a fixed retention period for Sessions data.
See [Firebase Privacy and Security](https://firebase.google.com/support/privacy) and [Manage Firebase installations and IDs](https://firebase.google.com/docs/projects/manage-installations) for details.

## 7. Children's privacy

The Service is not directed at children under 13, and the Developer does not knowingly collect personal information from children.

## 8. Your rights

- Uninstalling the app removes the active copy of locally stored values, while platform-managed backup or device-transfer copies remain subject to your operating system and account settings.
- Advertising identifiers can be reset or removed at any time in your device settings.
- In versions with advertising, ad consent can be changed or withdrawn from Privacy options in the settings screen.
- Crashlytics-enabled versions have no in-app Crashlytics switch.
  Uninstalling the app stops future reports from that installation; reports already sent remain subject to Google's retention process.
  Contact the Developer at the address below with questions about those reports.

## 9. Changes to this policy

If this policy changes, the revised policy and its effective date will be posted on this page.
Any change that widens what is collected will be published before the version making that change ships.

## 10. Contact

- Business name: donminzzi lab
- Representative: Dongmin Yu
- Email: [ydm2790@gmail.com](mailto:ydm2790@gmail.com)

Support requests and questions about the Service can be sent to the same address.
