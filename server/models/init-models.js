import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _baocaomatdosudungphong from  "./baocaomatdosudungphong.js";
import _baocaothang from  "./baocaothang.js";
import _chitiethoadon from  "./chitiethoadon.js";
import _hoadon from  "./hoadon.js";
import _khachhang from  "./khachhang.js";
import _loaikhachhang from  "./loaikhachhang.js";
import _loaiphong from  "./loaiphong.js";
import _nhanvien from  "./nhanvien.js";
import _phieuthuephong from  "./phieuthuephong.js";
import _phong from  "./phong.js";
import _thaydoiquydinh from  "./thaydoiquydinh.js";

export default function initModels(sequelize) {
  const baocaomatdosudungphong = _baocaomatdosudungphong.init(sequelize, DataTypes);
  const baocaothang = _baocaothang.init(sequelize, DataTypes);
  const chitiethoadon = _chitiethoadon.init(sequelize, DataTypes);
  const hoadon = _hoadon.init(sequelize, DataTypes);
  const khachhang = _khachhang.init(sequelize, DataTypes);
  const loaikhachhang = _loaikhachhang.init(sequelize, DataTypes);
  const loaiphong = _loaiphong.init(sequelize, DataTypes);
  const nhanvien = _nhanvien.init(sequelize, DataTypes);
  const phieuthuephong = _phieuthuephong.init(sequelize, DataTypes);
  const phong = _phong.init(sequelize, DataTypes);
  const thaydoiquydinh = _thaydoiquydinh.init(sequelize, DataTypes);


  return {
    baocaomatdosudungphong,
    baocaothang,
    chitiethoadon,
    hoadon,
    khachhang,
    loaikhachhang,
    loaiphong,
    nhanvien,
    phieuthuephong,
    phong,
    thaydoiquydinh,
  };
}
