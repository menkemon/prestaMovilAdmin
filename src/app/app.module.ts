import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseMessaging } from "@ionic-native/firebase-messaging";
import { Device } from "@ionic-native/device";

import { CuadrePage } from '../pages/tabPrincipal/cuadre/cuadre';
import { TabsPage } from '../pages/tabPrincipal/tabs/tabs';
import { MenuPage } from '../pages/tabPrincipal/menu/menu';
import { ShowMenuPage } from '../pages/tabPrincipal/show-menu/show-menu';
import { PendientePage } from '../pages/prestamos/pendiente/pendiente';
import { NewPrestamoPage } from '../pages/prestamos/new-prestamo/new-prestamo';
import { PagoPage } from "../pages/pago/pago";
import { GastosPage } from "../pages/gastos/gastos";

// import { MonitoreoPage } from "../pages/monitoreo/monitoreo";
// import { MapComponent } from "../components/map/map";
// import { PersonComponent } from "../components/person/person";
// import { CarsDisponiblesComponent } from "../components/cars-disponibles/cars-disponibles";

import { ChartModule } from "angular2-highcharts";
import * as highcharts from 'highcharts';

import { LoginPage } from '../pages/login/login';

import { CobrosPage } from '../pages/cobros/cobros';

// import { CarsService } from '../services/cars.service';
// import { SimulateService } from '../services/simulate.service';
import { BarrioService } from '../services/barrios.service';
import { LogueoService } from '../services/logueo.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from "@ionic-native/network";
import { Toast } from "@ionic-native/toast";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GlobalService } from '../services/globales.service';
import { BdService } from '../services/bd.service';
import { ClientesPage } from '../pages/clientes/clientes';
import { DevicesPage } from '../pages/devices/devices';


export const firebaseConfig = {
  apiKey: "AIzaSyDAs9QWBE1knaQwbgiYc9M9ovBvRGxkNfU",
  authDomain: "dbprestamos-4710.firebaseapp.com",
  databaseURL: "https://dbprestamos-4710.firebaseio.com",
  projectId: "dbprestamos-4710",
  storageBucket: "dbprestamos-4710.appspot.com",
  messagingSenderId: "549457564403"
};
@NgModule({
  declarations: [
    MyApp,
    CuadrePage,
    TabsPage,
    PendientePage,
    CobrosPage,
    MenuPage,
    LoginPage,
    ShowMenuPage,
    NewPrestamoPage,
    PagoPage,
    // MonitoreoPage,
    // MapComponent,
    // PersonComponent,
    // CarsDisponiblesComponent,
    GastosPage,
    ClientesPage,
    DevicesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CuadrePage,
    TabsPage,
    PendientePage,
    CobrosPage,
    MenuPage,
    LoginPage,
    ShowMenuPage,
    NewPrestamoPage,
    PagoPage,
    // MonitoreoPage,
    // MapComponent,
    // PersonComponent,
    // CarsDisponiblesComponent,
    GastosPage,
    ClientesPage,
    DevicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    // CarsService,
    // SimulateService,
    BarrioService,
    LogueoService,
    GlobalService,
    Network,
    Toast,
    AngularFirestore,
    BdService,
    FirebaseMessaging,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
