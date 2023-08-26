import React from "react";

function Header(){
    return(
        <footer className="bg-gray-200 text-center py-3 absolute bottom-0 w-full">
  <p className="text-gray-600">
    Get Your JoB &copy; {new Date().getFullYear()}
  </p>
</footer>

    )
}

export default Header