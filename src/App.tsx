import React from 'react';
import {Service} from './components/intex';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css'

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app__container">
                <Service/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
