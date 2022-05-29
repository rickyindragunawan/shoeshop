const productsList = [
  {
    name: "nike air max pre-day",
    img: "/images/58903c0b-0afe-400e-8ac6-9bf3ccf940ba.webp",
    price: "1.979.000",
    brand: "nike",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike sb force 58",
    img: "/images/3ca0e8ff-9564-46b0-a808-072cc0e8053a.webp",
    price: "1.099.000",
    brand: "nike",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike metcon 7",
    img: "/images/63a18e86-4df9-4615-b5f2-73c041358cd2.webp",
    price: "1.979.000",
    brand: "nike",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "suede classic xxi",
    img: "/images/suede_classic_xxi_red.webp",
    price: "980.000",
    brand: "puma",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "speedcat sparco",
    img: "/images/speedcat_sparco_red.webp",
    price: "1.400.000",
    brand: "puma",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "suede classic xxi",
    img: "/images/suede_classic_xxi_white.webp",
    price: "980.000",
    brand: "puma",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "super liga og retro",
    img: "/images/super_liga_og_retro.webp",
    price: "980.000",
    brand: "puma",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike jordan air 200e",
    img: "/images/d25948fc-4f2b-4791-90b1-25c5e51eaa4b.webp",
    price: "2.079.000",
    brand: "nike",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike air presto mid utility",
    img: "/images/646b995d-23a1-420f-9096-de99bd7e26bd.webp",
    price: "2.279.000",
    brand: "nike",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike air force 1 '07 lx",
    img: "/images/a3a96008-d81a-41c2-860c-f56709af8d4f.webp",
    price: "1.899.000",
    brand: "nike",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike air force 1 high '07 lv8",
    img: "/images/7a623120-f120-4346-8024-b7e9f62aab4c.webp",
    price: "1.919.000",
    brand: "nike",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike air jordan 1 retro high og",
    img: "/images/3249465b-a198-4399-8373-741d17da9935.webp",
    price: "2.569.000",
    brand: "nike",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike waffle trainer 2",
    img: "/images/59830ecf-e7f0-459d-bb4a-c8278cb5f751.webp",
    price: "1.279.000",
    brand: "nike",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike renew run 3",
    img: "/images/c4f90b49-4874-4404-b008-ed0992c18d62.webp",
    price: "1.299.000",
    brand: "nike",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "ca pro classic",
    img: "/images/ca_pro_classic.webp",
    price: "1.120.000",
    brand: "puma",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "suede classic xxi",
    img: "/images/suede_classic_xxi.webp",
    price: "980.000",
    brand: "puma",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "magnify nitro",
    img: "/images/magnify_nitro_blue.webp",
    price: "1.960.000",
    brand: "puma",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike sb shane premium",
    img: "/images/13afd4b8-79bf-41e9-a429-9b11087cd5ab.webp",
    price: "1.299.000",
    brand: "nike",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike air force 1 '07 craft",
    img: "/images/3e689630-e1ca-4e35-b08c-6f32e9afb14d.webp",
    price: "1.799.000",
    brand: "nike",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "nike sb ishod wair",
    img: "/images/e7111522-da86-4b40-888f-3d0df1be82b5.webp",
    price: "1.429.000",
    brand: "nike",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },

  {
    name: "suede classic xxi",
    img: "/images/suede_classic_xxi_blue.webp",
    price: "980.000",
    brand: "puma",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "electrify nitro green",
    img: "/images/electrify_nitro_green.webp",
    price: "1.400.000",
    brand: "puma",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "voyage nitro",
    img: "/images/voyage_nitro_green.webp",
    price: "1.820.000",
    brand: "puma",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans pride sentry",
    img: "/images/vans_pride_sentry_black.webp",
    price: "1.330.000",
    brand: "vans",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans 136 decon",
    img: "/images/vans_136_decon_blue.webp",
    price: "1.260.000",
    brand: "vans",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans color theory classic",
    img: "/images/vans_color_theory_classic.webp",
    price: "910.000",
    brand: "vans",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas nmd v3",
    img: "/images/nmd_v3_white.webp",
    price: "2.240.000",
    brand: "adidas",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas daily 3.0 eco",
    img: "/images/daily_3.0_eco_white.webp",
    price: "910.000",
    brand: "adidas",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas galaxy 5",
    img: "/images/fy6736_sl_ecom.webp",
    price: "750.000",
    brand: "adidas",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas vl court 2.0",
    img: "/images/da9854_sl_ecom.webp",
    price: "900.000",
    brand: "adidas",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas harden vol 5",
    img: "/images/harden_vol_5_red.webp",
    price: "1.600.000",
    brand: "adidas",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas 4d fusio shoes",
    img: "/images/h04509_sl_ecom.webp",
    price: "3.500.000",
    brand: "adidas",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas donovan mtchell",
    img: "/images/donovan_mitchell_red.webp",
    price: "1.540.000",
    brand: "adidas",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas lite racer adapt 4.0",
    img: "/images/lite_racer_adapt_4.0_green.webp",
    price: "1.200.000",
    brand: "adidas",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas freak spark",
    img: "/images/freak_spark_red.webp",
    price: "1.050.000",
    brand: "adidas",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas supernova",
    img: "/images/supernova_green.webp",
    price: "1.160.000",
    brand: "adidas",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas icon 7 tpu",
    img: "/images/icon_7_tpu_red.webp",
    price: "952.000",
    brand: "adidas",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas barricade",
    img: "/images/gz8482_sl_ecom.webp",
    price: "2.200.000",
    brand: "adidas",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas supernova",
    img: "/images/supernova_red.webp",
    price: "1.160.000",
    brand: "adidas",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas 4dfwd x parley",
    img: "/images/fw3012_sl_ecom.webp",
    price: "1.900.000",
    brand: "adidas",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas 4dfwd x parley",
    img: "/images/gx6313_sl_ecom.webp",
    price: "4.000.000",
    brand: "adidas",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas t-mac 2.0 restomod svsm",
    img: "/images/t-mac_2.0_restomod_svsm_green.webp",
    price: "1.820.000",
    brand: "adidas",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas ultraboost 5.0 dna",
    img: "/images/ultraboost_5.0_dna_green.webp",
    price: "3.300.000",
    brand: "adidas",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse unt1tl3d translucent barcode",
    img: "/images/A02599C_A_08X1.jpg",
    price: "1.050.000",
    brand: "converse",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck 70 archive paint splatter",
    img: "/images/A01171C_A_08X1.jpg",
    price: "1.190.000",
    brand: "converse",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse x peanuts chuck taylor all star",
    img: "/images/A02573C_A_08X1.jpg",
    price: "980.000",
    brand: "converse",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star cx pull tab",
    img: "/images/A01171C_A_08X1.jpg",
    price: "1.050.000",
    brand: "converse",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star translucent barcode",
    img: "/images/A02583C_A_08X1.jpg",
    price: "910.000",
    brand: "converse",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star leather",
    img: "/images/135251C_A_08X1.jpg",
    price: "980.000",
    brand: "converse",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck 70 crafted stripe",
    img: "/images/A00472C_D_08X1.jpg",
    price: "1.190.000",
    brand: "converse",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star cx seasonal color",
    img: "/images/A03295C_A_08X1.jpg",
    price: "1.050.000",
    brand: "converse",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck 70 it's possible",
    img: "/images/A01736C_A_08X1.jpg",
    price: "1.330.000",
    brand: "converse",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans era 59",
    img: "/images/vans_era_59_red.webp",
    price: "840.000",
    brand: "vans",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas zx 5k boost",
    img: "/images/zx_5k_boost_green.webp",
    price: "2.240.000",
    brand: "adidas",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas lite racer adapt 4.0 shoes",
    img: "/images/h04296_sl_ecom.webp",
    price: "1.200.000",
    brand: "adidas",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas lite racer 3.0 shoes",
    img: "/images/gw7954_sl_ecom.webp",
    price: "750.000",
    brand: "adidas",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas 4d fwd",
    img: "/images/gx2977_sl_ecom.jpg",
    price: "3.500.000",
    brand: "adidas",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance 574 court",
    img: "/images/ct574brg_nb_02_i.webp",
    price: "1.260.000",
    brand: "new balance",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance x aries fresh foam 1080v11",
    img: "/images/m1080z11_nb_02_i.webp",
    price: "2.520.000",
    brand: "new balance",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric jamie foy 306 lanceless",
    img: "/images/nm306lbw_nb_02_i.webp",
    price: "1.120.000",
    brand: "new balance",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans rowan",
    img: "/images/vans_rowan_blue.webp",
    price: "980.000",
    brand: "vans",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans sk8 hi",
    img: "/images/sk8_hi_green.webp",
    price: "1.120.000",
    brand: "vans",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star washed canvas",
    img: "/images/A02584C_D_08X1.jpg",
    price: "910.000",
    brand: "converse",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star patchwork",
    img: "/images/A02030C_A_08X1.jpg",
    price: "910.000",
    brand: "converse",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse unt1tl3d translucent barcode",
    img: "/images/A02598C_A_08X1.jpg",
    price: "1.050.000",
    brand: "converse",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "converse chuck taylor all star classic",
    img: "/images/M7650_A_08X1.jpg",
    price: "910.000",
    brand: "converse",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas ultraboost 5.0 dna shoes",
    img: "/images/gx9332_sl_ecom.webp",
    price: "3.300.000",
    brand: "adidas",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas nmd r1",
    img: "/images/nmd_r1_white.webp",
    price: "2.100.000",
    brand: "adidas",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas stan smith",
    img: "/images/stan_smith_white.webp",
    price: "1.300.000",
    brand: "adidas",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "adidas ultraboost 4.0 dna shoes",
    img: "/images/ultraboost_4.0_dna_white.webp",
    price: "2.660.000",
    brand: "adidas",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance fuelcell shift tr",
    img: "/images/mxshftlk_nb_02_i.webp",
    price: "1.400.000",
    brand: "new balance",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric tiago lemos 1010",
    img: "/images/nm1010bb_nb_02_i.webp",
    price: "1.540.000",
    brand: "new balance",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric 212 pro court",
    img: "/images/nm212bss_nb_02_i.webp",
    price: "980.000",
    brand: "new balance",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance 210 pro court",
    img: "/images/ct210trb_nb_02_i.webp",
    price: "910.000",
    brand: "new balance",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric tiago lemos 1010",
    img: "/images/nm1010gm_nb_02_i.webp",
    price: "1.540.000",
    brand: "new balance",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok lavante trail 2",
    img: "/images/reebok_lavante_trail_2_green.webp",
    price: "1.190.000",
    brand: "reebok",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok looney tunes",
    img: "/images/rebook_looney_tunes.jpg",
    price: "1.680.000",
    brand: "reebok",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok zig kinetica ii",
    img: "/images/reebok_zig_kinetica_ii.jpg",
    price: "2.380.000",
    brand: "reebok",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans old skool",
    img: "/images/vans_old_skool_red.webp",
    price: "910.000",
    brand: "vans",
    color: "red",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans pride old skool",
    img: "/images/pride_old_skool_white.webp",
    price: "1.050.000",
    brand: "vans",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric jamie foy 306",
    img: "/images/nm306slc_nb_02_i.webp",
    price: "1.260.000",
    brand: "new balance",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric jamie foy 306",
    img: "/images/nm306ugc_nb_02_i.webp",
    price: "1.260.000",
    brand: "new balance",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric 288 sport",
    img: "/images/nm288sdb_nb_02_i.webp",
    price: "1.330.000",
    brand: "new balance",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance fuelcell 996v4",
    img: "/images/mch996l4_nb_02_i.webp",
    price: "2.030.000",
    brand: "new balance",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "new balance numeric 288 sport",
    img: "/images/nm288sgh_nb_02_i.webp",
    price: "1.260.000",
    brand: "new balance",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok nano x2",
    img: "/images/reebok_nano_x2_black.webp",
    price: "1.890.000",
    brand: "reebok",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok trail cruiser",
    img: "/images/reebok_trail_cruiser_black.webp",
    price: "1.260.000",
    brand: "reebok",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok victory g",
    img: "/images/reebok_victory_g_blue.webp",
    price: "1.680.000",
    brand: "reebok",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok zig dynamica 2",
    img: "/images/reebok_zig_dynamica_2_blue.webp",
    price: "1.120.000",
    brand: "reebok",
    color: "blue",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok answer iv",
    img: "/images/reebok_answer_iv_green.webp",
    price: "2.100.000",
    brand: "reebok",
    color: "green",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok tyrrell winston",
    img: "/images/tyrrell_winston.webp",
    price: "2.240.000",
    brand: "reebok",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "reebok nano x2",
    img: "/images/reebok_nano_x2.webp",
    price: "1.890.000",
    brand: "reebok",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans colfax boot",
    img: "/images/vans_colfax_boot_black.jpg",
    price: "1.470.000",
    brand: "vans",
    color: "black",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
  {
    name: "vans skate authentic",
    img: "/images/skate_authentic.webp",
    price: "910.000",
    brand: "vans",
    color: "white",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos tempore tenetur exercitationem maiores reiciendis totam pariatur. Illo, ea doloremque!",
  },
];

module.exports = productsList;
