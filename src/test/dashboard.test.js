import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Dashboard} from '../components/dashboard'

describe("Test For Dashboard Components",()=>{
    it("givenDashboardElementsByTestId_shouldContainsAllElementInHeader",()=>{
        const { getByTestId }  = render(<Dashboard />);
        const AppBar = getByTestId("appBar");
        const ToolBar = getByTestId("toolbar")
        const Icon = getByTestId("iconButton");
        const Header = getByTestId("header");
        const MenuIcon = getByTestId("menuIcon");
        const logout = getByTestId("logoutButton");

        expect(AppBar).toBeInTheDocument();
        expect(ToolBar).toBeInTheDocument();
        expect(Icon).toBeInTheDocument();
        expect(Header).toBeInTheDocument();
        expect(MenuIcon).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
    });

    it("givenDashboardElementsByTestId_shouldContainAllElementsInSideBar",()=>{
        const { getByTestId }  = render(<Dashboard />);
        const Drawer = getByTestId("drawer");
        const DrawerIcon = getByTestId("drawerIconButton"); 
        const List= getByTestId("listElements");
        const listElementIcon = getByTestId("listElementIcon")
        const AddElementIcon = getByTestId("addElementIcon");
        const EditElementIcon = getByTestId("editElementIcon");
        const DeleteElementIcon = getByTestId("deleteElementIcon");
        
        
        expect(Drawer).toBeInTheDocument();
        expect(DrawerIcon).toBeInTheDocument();
        expect(List).toBeInTheDocument();
        expect(listElementIcon).toBeInTheDocument();
        expect(EditElementIcon).toBeInTheDocument();
        expect(AddElementIcon).toBeInTheDocument();
        expect(DeleteElementIcon).toBeInTheDocument();
    });


})