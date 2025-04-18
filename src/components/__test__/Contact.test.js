import { render,screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom"

describe("Contact",()=>{
    test("Should load contact page",()=>{
        render (<Contact />);
       const heading= screen.getByText("Contact Us");
       expect(heading).toBeInTheDocument();
    })
    
    test("Should load button in contact page",()=>{
        render (<Contact />);
       const btn= screen.getByRole("button");
       expect(btn).toBeInTheDocument();
    })
})
