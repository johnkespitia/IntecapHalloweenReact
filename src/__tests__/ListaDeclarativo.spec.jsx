import { beforeEach, describe, expect, it } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import ListaDeclarativo from "../Base2/wrappers/ListaDeclarativo.jsx";
import ListaPersonajes from "../Base2/componentes/ListaPersonajes.jsx";

const mockFetch = vi.fn();
global.fetch = mockFetch;
//global.fetch = vi.fn();

const MOCK_API_RESPONSE = {
    info: {
        pages: 1
    },
    results: [
        { id: 1, name: "Rick Sanchez", image: "rick.png", species: "Human" },
        { id: 2, name: "Morty Smith", image: "morty.png", species: "Human" }
    ]
};

mockFetch.mockImplementation(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_API_RESPONSE)
    });
});

describe('TEST LISTADECLARATIVO.JSX', ()=>{
    beforeEach(()=>{
        mockFetch.mockClear();
    });
    it('must render', ()=>{
        render(
            <ListaDeclarativo>
                <div>Child 1</div>
                <div>Child 2</div>
            </ListaDeclarativo>
        );
        const child1 = screen.getByText('Child 1');
        const child2 = screen.getByText('Child 2');
        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
    });

    it("fetch personajes", async () => {
        render(<ListaDeclarativo>
            <ListaPersonajes />
        </ListaDeclarativo>);

        // expect(screen.getByText(/Cargando/)).toBeInTheDocument();
        expect(mockFetch).toHaveBeenCalledTimes(1);

        await waitFor(() => {
            const personaje1 = screen.getByText(/.*Rick Sanchez*/);
            expect(personaje1).toBeInTheDocument();
        });
    })
});