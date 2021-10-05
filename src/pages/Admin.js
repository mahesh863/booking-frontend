import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input } from "reactstrap";

//css
import "../css/Admin.page.css";
import {
  addCategory,
  addProduct,
  createSeats,
  deleteCategory,
  deleteProduct,
  editProduct,
} from "../helpers/admin";

//Redux
import { getCategories } from "../actions/categories";
import { connect } from "react-redux";
import { getAllProduct } from "../actions/admin";

const Admin = ({ getCategories, categoryState, adminState, getAllProduct }) => {
  const [categoryName, setCategoryName] = useState("");
  const [deleteCategoryId, setDeleteCategoryId] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");

  //Product
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productAddress, setProductAddress] = useState("");
  const [totalNoOfSeats, setTotalNoOfSeats] = useState("");
  const [priceOfEachSeat, setPriceOfEachSeat] = useState("");
  const [deleteProductId, setDeleteProductId] = useState("");

  //Create Seats
  const [todaysDate, setTodaysDate] = useState("");
  const [productId, setProductId] = useState("");
  const [showDate, setShowDate] = useState("");
  const [showTime, setShowTime] = useState("");

  const handelGetAllProducts = () => {
    getAllProduct();
  };

  const handelCreateSeats = () => {
    // var showTimestamp = parseInt(
    //   (new Date(showDate).getTime() / 1000).toFixed(0)
    // );
    createSeats(productId, showTime, showDate)
      .then((res) => {
        setProductId("");
        setShowDate("");
        setShowTime("");
        toast.success("Seats Created", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        setProductId("");
        setShowDate("");
        setShowTime("");
        toast.error(err.response.data.err, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  //Category
  const handelAddCategory = (e) => {
    e.preventDefault();

    if (!categoryName) {
      toast.warn("Category Name Cannot Be Empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    addCategory(categoryName)
      .then((res) => {
        console.log(res);
        getCategories();
        setCategoryName("");
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed To Add New Category!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handelDeleteCategory = () => {
    if (!deleteCategoryId) {
      toast.warn("Select A Category To Delete!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    deleteCategory(deleteCategoryId)
      .then((res) => {
        setDeleteCategoryId("");
        getCategories();
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed To Delete Category!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  //Products
  const handelAddProduct = () => {
    if (
      !productAddress ||
      !productCategory ||
      !priceOfEachSeat ||
      !totalNoOfSeats ||
      !productName
    ) {
      toast.warn("Please Enter All Fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    addProduct(
      productName,
      productAddress,
      totalNoOfSeats,
      priceOfEachSeat,
      productCategory
    )
      .then((res) => {
        setProductName("");
        setProductAddress("");
        setProductCategory("");
        setTotalNoOfSeats("");
        setPriceOfEachSeat("");

        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed To Add Product!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handelEditProduct = () => {
    if (
      !productAddress ||
      !productCategory ||
      !productAddress ||
      !priceOfEachSeat ||
      !totalNoOfSeats ||
      !productName
    ) {
      toast.warn("Please Enter All Fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    editProduct(
      productName,
      productAddress,
      totalNoOfSeats,
      priceOfEachSeat,
      productCategory
    )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed To Edit The Product!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handelDeleteProduct = () => {
    if (!deleteProductId) {
      toast.warn("Please Select Product TO Delete !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    deleteProduct(deleteProductId)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed To Delete The Product!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    getCategories();
    var today = new Date().toISOString().split("T")[0];
    setTodaysDate(today);
  }, []);

  return (
    <div className="container">
      {console.log(adminState)}
      <div className="row">
        <div className="col-6 col-base">
          <h2 className="text-center"> Category</h2>

          <div className="my-5 border p-3 ">
            <Form onSubmit={(e) => handelAddCategory(e)}>
              <FormGroup>
                <Label className="form-label">New Category Name</Label>

                <Input
                  type="text"
                  placeholder="Enter New Category Name..."
                  className="form-input"
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={categoryName}
                />
              </FormGroup>

              <div className="button" onClick={handelAddCategory}>
                {" "}
                Add{" "}
              </div>
            </Form>
          </div>

          <div className="my-5 border p-3">
            <Form>
              <FormGroup>
                <Label className="form-label">Category To Delete</Label>

                <Input
                  type="select"
                  onChange={(e) => setDeleteCategoryId(e.target.value)}
                  value={deleteCategoryId}
                  className="form-input"
                >
                  <option></option>
                  {categoryState.categories.map((cate) => (
                    <option value={cate.categoryId}>{cate.categoryName}</option>
                  ))}
                </Input>
              </FormGroup>

              <div className="button" onClick={handelDeleteCategory}>
                Delete
              </div>
            </Form>
          </div>
          <h2 className="text-center"> Seats </h2>
          <div className="my-5">
            {!adminState.allProducts ? (
              <div
                className="button"
                style={{ borderRadius: "10px" }}
                onClick={handelGetAllProducts}
              >
                Get All Products
              </div>
            ) : (
              <Form>
                <FormGroup>
                  <Label className="form-label">Select Show</Label>

                  <Input
                    type="select"
                    className="form-input"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  >
                    <option value=""> </option>
                    {adminState.allProducts.map((prods) => (
                      <option value={prods.productId}>
                        {prods.productName}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label className="form-label">Date</Label>
                  <Input
                    className="form-input"
                    type="date"
                    min={todaysDate}
                    value={showDate}
                    onChange={(e) => setShowDate(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="form-label">Time</Label>

                  <Input
                    type="time"
                    name="time"
                    className="form-input"
                    value={showTime}
                    onChange={(e) => setShowTime(e.target.value)}
                  />
                </FormGroup>
                <div className="button" onClick={handelCreateSeats}>
                  {" "}
                  Create{" "}
                </div>
              </Form>
            )}
          </div>
        </div>

        <div className="col-6 col-base">
          <h2 className="text-center"> Product</h2>

          <div className="my-5 border p-3 ">
            <h2 className="text-center">Create Product</h2>
            <Form>
              <FormGroup>
                <Label className="form-label">Product Name</Label>
                <Input
                  className="form-input"
                  placeholder="Enter Product Name..."
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="form-label">Product Address</Label>
                <Input
                  className="form-input"
                  placeholder="Enter Product Address..."
                  type="text"
                  value={productAddress}
                  onChange={(e) => setProductAddress(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="form-label">Product Category</Label>
                <Input
                  type="select"
                  onChange={(e) => setProductCategoryId(e.target.value)}
                  value={productCategoryId}
                  defaultChecked="Please Select A Category"
                  className="form-input"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                >
                  <option> </option>
                  {categoryState.categories.map((cate) => (
                    <option value={cate.categoryId}>{cate.categoryName}</option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label className="form-label">Total No Of Seats</Label>
                <Input
                  className="form-input"
                  placeholder="Enter Total No Of Seats..."
                  type="number"
                  value={totalNoOfSeats}
                  onChange={(e) => setTotalNoOfSeats(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="form-label">Price of Each Seat</Label>
                <Input
                  className="form-input"
                  placeholder="Enter Price Per Seat..."
                  type="number"
                  value={priceOfEachSeat}
                  onChange={(e) => setPriceOfEachSeat(e.target.value)}
                />
              </FormGroup>
            </Form>

            <div className="button" onClick={handelAddProduct}>
              {" "}
              Add Product{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getCategories: () => getCategories(),
  getAllProduct: () => getAllProduct(),
};

const mapStateToProps = (state) => ({
  categoryState: state.category,
  adminState: state.admin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
