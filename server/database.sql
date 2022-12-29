CREATE TABLE NhanVien(
    MaNV uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaSoThue TEXT ,
    NgayBatDau TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    HoKhauTT TEXT,
    CCCD TEXT ,
    LoaiNV TEXT 
);
	
CREATE TABLE LoaiPhong(
    MaLoaiPhong uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    TenLoaiPhong TEXT,
    MoTa TEXT
);

CREATE TABLE LoaiKhachHang(
    MaLoaiKH INTEGER PRIMARY KEY,
    TenLoaiKH TEXT
);

CREATE TABLE KhachHang (
    MaKH uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaLoaiKH INTEGER NOT NULL,
    TenKH TEXT,
    SoCCCD TEXT,
    Email TEXT UNIQUE,
    GioiTinh TEXT NOT NULL,
    SoDienThoai TEXT ,
    CONSTRAINT fk_KH_LKH FOREIGN KEY (MaLoaiKH) REFERENCES LoaiKhachHang(MaLoaiKH)
);

CREATE TABLE Phong(
    MaPhong uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaLoaiPhong uuid NOT NULL,
    Ten TEXT,
    TinhTrang TEXT,
    Gia TEXT,
    CONSTRAINT fk_P_LP FOREIGN KEY (MaLoaiPhong) REFERENCES LoaiPhong(MaLoaiPhong)
);


CREATE TABLE HoaDon(
    MaHD uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaKH uuid NOT NULL,
    NhanVienXuatHD uuid NOT NULL,
    NgayThanhToan TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    TongTien TEXT NOT NULL,
    TrangThai TEXT,
    CONSTRAINT fk_HD_NV FOREIGN KEY (NhanVienXuatHD) REFERENCES NhanVien(MaNV),
    CONSTRAINT fk_HD_KH FOREIGN KEY (MaKH) REFERENCES KhachHang(MaKH)
);


CREATE TABLE ChiTietHoaDon(
    MaHD uuid NOT NULL ,
    MaPhong uuid NOT NULL,
    DonGia TEXT,
    NgayDat TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_CTHD_HD FOREIGN KEY (MaHD) REFERENCES HoaDon(MaHD),
    CONSTRAINT fk_CTHD_P FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong),
	PRIMARY KEY (MaHD,MaPhong)
);






CREATE TABLE PhieuThuePhong (
    MaPhieu uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaKH uuid,
    NhanVienLapPhieu uuid,
    MaPhong uuid,
    NgayNhanPhong date,
    NgayLapPhieu TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_PhieuThuePhong_KH FOREIGN KEY (MaKH) REFERENCES KhachHang(MaKH),
    CONSTRAINT fk_PhieuThuePhong_NV FOREIGN KEY (NhanVienLapPhieu) REFERENCES NhanVien(MaNV),
    CONSTRAINT fk_PhieuThuePhong_P FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong)

);


CREATE TABLE ThayDoiQuyDinh (
    MaBangThayDoi uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaNV uuid NOT NULL,
    NgayThayDoi TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_ThayDoiQuyDinh_NV FOREIGN KEY (MaNV) REFERENCES NhanVien(MaNV)
);


CREATE TABLE BaoCaoThang (
    MaBangBaoCao uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaNV uuid NOT NULL,
    NgayLap TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_BaoCaoThang_NV FOREIGN KEY (MaNV) REFERENCES NhanVien(MaNV)
);


CREATE TABLE BaoCaoMatDoSuDungPhong (
    MaBangBaoCao uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    MaNV uuid NOT NULL,
    NgayLap TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_BaoCaoMatDoSuDungPhong_NV FOREIGN KEY (MaNV) REFERENCES NhanVien(MaNV)
);


























-- CREATE TABLE user_role_type(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     code TEXT NOT NULL,
--     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );


-- CREATE TABLE user_role(
--     id uuid PRIMARY KEY,
--     user_role_type_id INTEGER NOT NULL,
--     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--     CONSTRAINT fk_user_userrole
--       FOREIGN KEY(id) 
-- 	  REFERENCES user_table(id),
--     CONSTRAINT fk_userrole_user_role_type
--       FOREIGN KEY(user_role_type_id) 
-- 	  REFERENCES user_role_type(id)

    
-- );

-- INSERT INTO user_role_type(name, code) VALUES ('user', 'ABC');
-- INSERT INTO user_role_type(name, code) VALUES ('admin', 'ABC');
-- DROP TABLE user_roles;
-- DROP TABLE user_tables;  
--INSERT INTO phong(maloaiphong,ten,tinhtrang,gia) VALUES ('d46488af-9897-4cfe-aaa4-af58bdc66a6c','Phong hai giuong','available','300');
-- INSERT INTO loaiphong(tenloaiphong,mota) VALUES ('Phong thuong','Phong co ban cong huong ra bien'); 
-- insert into loaiphong(tenloaiphong,mota) VALUES ('Phong thuong gia 1','Bao an bao uong');
-- INSERT INTO phong(maloaiphong,ten,tinhtrang,gia) Values ('66208dbc-b983-41ef-b8cc-2f18ea2d85da','Phong don','Available','300$');  

--insert into hoadon (makh,nhanvienxuathd,tongtien,trangthai) values('4ecbe0f6-e33d-43b4-b349-6cf564b8c5af','f423de34-9edd-441e-b3aa-f4a3daebe5df','300$','Hoan thanh');