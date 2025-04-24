import MOCK_DATA from "../mocks/resCard.json"
import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import "@testing-library/jest-dom"

test("Should render card component",()=>{
    render(<ResturantCard resData={MOCK_DATA} />)
    const name=screen.getByText("Bawri")
    expect(name).toBeInTheDocument()
})