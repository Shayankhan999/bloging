import React, { useContext } from 'react';
import Layout from '../../../components/layout/Layout';
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;
    const navigate = useNavigate();

    // Logout Function
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <Layout>
            <div className="py-10">
                <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className="w-40 h-40 object-cover rounded-full border-2 border-pink-600 p-1"
                            src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                            alt="profile"
                        />
                    </div>
                    <div className="right">
                        <h1 className='text-center font-bold text-2xl mb-2' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            Muhammad shayan khan
                        </h1>
                        <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">Software Developer</h2>
                        <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">shayankhan9148@gmail.com</h2>
                        <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold"><span>Total Blog: </span> 15</h2>
                        <div className="flex gap-2 mt-2">
                            <Link to={'/createblog'}>
                                <Button className='px-8 py-2' style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'black' : 'white' }}>
                                    Create Blog
                                </Button>
                            </Link>
                            <Button onClick={logout} className='px-8 py-2' style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'black' : 'white' }}>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>

                <hr className={`border-2 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}`} />

                <div className="">
                    <div className='container mx-auto px-4 max-w-7xl my-5'>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead style={{ background: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)' }} className="text-xs">
                                    <tr>
                                        {['S.No', 'Thumbnail', 'Title', 'Category', 'Date', 'Action'].map((header, index) => (
                                            <th key={index} style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {getAllBlog.length > 0 ? (
                                        getAllBlog.map((item, index) => {
                                            const { thumbnail, date } = item;
                                            return (
                                                <tr className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} key={item.id}>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{index + 1}.</td>
                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium">
                                                        <img className='w-16 rounded-lg' src={thumbnail} alt="thumbnail" />
                                                    </th>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{item.blogs.title}</td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{item.blogs.category}</td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{date}</td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        <button className='px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">Not Found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
