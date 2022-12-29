import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Employee from "views/admin/Employee.js";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                <HeaderStats/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/maps" exact component={Maps}/>
                        <Route path="/settings" exact component={Settings}/>
                        <Route path="/tables" exact component={Employee}/>
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>
                    <FooterAdmin/>
                </div>
            </div>
        </QueryClientProvider>
    );
}
