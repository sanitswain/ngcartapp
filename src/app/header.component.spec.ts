import {TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";

describe(
  "Deader component testing", () => {
    let headerobj;
    beforeEach(
      () => {
        TestBed.configureTestingModule({
          declarations: [HeaderComponent]
        });

        let fixture = TestBed.createComponent(HeaderComponent);
        headerobj = fixture.debugElement.componentInstance;
      });

    it("Should verify instance of Header component", () => {
      expect(headerobj).toBeTruthy();
    });

    it("cmpHeading value of HeaderComponent", () => {
      expect(headerobj.cmpHeading).toEqual("My Shopping Cart")
    })

  });
