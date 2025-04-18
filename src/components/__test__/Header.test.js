import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import AppStore from "../../utils/Appstore"
import { BrowserRouter,Link } from "react-router"

test("Header component Login test",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const login=screen.getByRole("button",{name:"login"});
    expect(login).toBeInTheDocument();
})

// test("Header component Login-to-logout test",()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={AppStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     )
//     const login=screen.getByRole("button",{name:"login"});
//     fireEvent.click(login);
//     const logout=screen.getByRole("button",{name:"logout"});
//     expect(logout).toBeInTheDocument();
// })
