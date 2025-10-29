import { describe, it, vi } from "vitest";
import Login from "../social-network/pages/Login";
import { fireEvent, render, screen } from "@testing-library/react";
//importar dependencia a mockear
import { useUserStore } from "../social-network/stores";

//mockear la dependencia
vi.mock('../social-network/stores', ()=>{
    return {
        useUserStore: vi.fn()
    }
});

describe('TEST LOGIN.JSX', ()=>{
    //configurar el mock antes de cada prueba
    beforeEach(()=>{
        useUserStore.mockReturnValue({
            setUser: vi.fn()
        });
    });
    it('must render', ()=>{
        render(<Login/>);
        const text = screen.getByText('Login');
        expect(text).toBeInTheDocument();
    });
    it('fill form', ()=>{
        render(<Login/>);
        const inputUsername = screen.getByPlaceholderText('Username');
        const inputPassword = screen.getByPlaceholderText('Password');
        const button = screen.getByText(/Iniciar Sesión/i);
        expect(inputUsername).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();

        // simular eventos del usuario
        fireEvent.change(inputUsername, {target: {value: 'testuser'}});
        fireEvent.change(inputPassword, {target: {value: 'testpassword'}});
        expect(inputUsername.value).toBe('testuser');
        expect(inputPassword.value).toBe('testpassword');
        fireEvent.click(button);
        expect(useUserStore().setUser).toHaveBeenCalled();
        
    });
})