
const Header = () => {
    return (
        <div>
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
                <img
                    className="w-44"
                    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" />
            </div>
            <div className="absolute top-4 right-10 ">
                <button className="bg-red-500 py-2 px-4 rounded-md text-white"> Sign In</button>
            </div>


        </div>
    );
}

export default Header