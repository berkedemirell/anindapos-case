import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-slate-950 p-12">
      <div>
        <div className="flex flex-row items-center jusyify-center text-slate-50 text-4xl gap-4">
          <Link>
            <FaSquareXTwitter />
          </Link>
          <Link>
            <FaSquareInstagram />
          </Link>
          <Link>
            <FaYoutube />
          </Link>
          <Link>
            <FaSquareFacebook />
          </Link>
          <Link>
            <FaSquarePinterest />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
