import { HomePage } from "./home";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";
import { PersonProvider } from './../../providers/person/person';
import { CooperProvider } from "../../providers/cooper/cooper";
import { inject } from "@angular/core/testing";

describe("HomePage", () => {
  let homepage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage
      ],
      imports: [IonicModule.forRoot(HomePage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        PersonProvider,
        CooperProvider
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    homepage = fixture.componentInstance;
  });

  it("should create the home page", () => {
    expect(homepage).toBeTruthy();
    expect(homepage instanceof HomePage).toEqual(true);
  });

  it('should have user default values', () => {
    expect(homepage.user).toEqual({ distance: 1000, age: 20, gender: 'female' });
  });

  it('should have calculate function', () => {
    spyOn(homepage, 'calculate'); // we use jasmine to spy on a function

    homepage.calculate()

    expect(homepage.calculate).toHaveBeenCalled(); // check if the function has been called
  });

  it("should have user array", () => {
    expect(homepage.user).toEqual({distance: 1000, age: 20, gender: 'female'});
  });

  it("calculate function should call person provider doAssessment function", inject(
    [PersonProvider],
    person => {
      homepage.user = { age: 25, gender: "female", distance: 2500 };
      spyOn(person, "doAssessment").and.returnValue("Above average");
  
      homepage.calculate();
  
      expect(person.doAssessment).toHaveBeenCalled();
      expect(person.doAssessment).toHaveBeenCalledWith(2500);
      expect(person.age).toEqual(25);
      expect(person.gender).toEqual("female");
    }
  ));
  
});