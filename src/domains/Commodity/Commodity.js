import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Input, Form, Space } from "antd";
import "./Commodity.css";
import NewCommodity from "./NewCommodity.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import client from '../../lib/api/client';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    key: "1",
    title: "상품 이름",
    dataIndex: "name"
  },
  {
    key: "2",
    title: "등록횟수",
    dataIndex: "number"
  },
  {
    key: "3",
    title: "가격",
    dataIndex: "price"
  },
];
const data = [
  {
    name: "APT 1:1",
    number: "10회",
    price: "100,000원",
  },
  {
    name: "APT 1:1",
    number: "10회",
    price: "100,000원",
  },
  {
    name: "APT 1:1",
    number: "10회",
    price: "100,000원",
  }
];

const Commodity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [regist, setRegist] = useState("");

  const categoryHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const priceHandler = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const registHandler = (e) => {
    e.preventDefault();
    setRegist(e.target.value);
  };

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const [form] = Form.useForm();
  const [formLayout] = useState("vertical");
  const formItemLayout =
    formLayout === "vertical"
      ? {
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 8
          }
        }
      : null;

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const getData = async () => {
    await client.get("/api/product/list").then(
      res => {
        setLoading(false);
        console.log(res);
        
        setState(
          res.data.map(row => ({
            name: row.name,
            number: row.numAndPrice[0].num,
            price: row.numAndPrice[0].price,
            id: row._id
          }))
        );
      },
      
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("상품 추가 성공");
  
    let body = {
      name: name,
    };
  
    client
      .post("/api/product/write", body)
      .then((res) => 
         console.log(res)
         );

    getData();
    };

  return (
    <>
      <div className="commoDiv1">
        <Search />
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          신규 상품 등록
        </Button>
        <Modal
          title="신규 상품 등록"
          open={isModalOpen}
          onOk={submitHandler}
          onCancel={handleCancel}
          width={1000}
        >
          <div className="Div1">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout
        }}
        style={{
          resize: "none",
          width: 800
        }}
      >
        <Form.Item label="상품 이름">
          <Input 
            placeholder="상품 이름을 입력해 주세요."
            value={name}
            onChange={nameHandler}
            />
        </Form.Item>
      </Form>

      <div>등록 횟수/가격</div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[
                      {
                        required: true,
                        message: "등록 횟수를 입력해 주세요."
                      }
                    ]}
                  >
                    <Input 
                      placeholder="횟수"
                     />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[
                      {
                        required: true,
                        message: "가격을 입력해 주세요."
                      }
                    ]}
                  >
                    <Input 
                      placeholder="가격" 
                      />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  횟수/가격 추가
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
        </Modal>
      </div>
      <br />
      <Table 
        columns={columns} 
        dataSource={state}
        pagination={{ 
          current:page,
          pageSize: pageSize,
          total:500,
          onChange: (page,pageSize)=>{
            setPage(page);
            setPageSize(pageSize)
          }
         }} 
         onRow={(record, index) => {
          const name = record.name;
          const number = record.number;
          const price = record.price;
          // return {
          //   onClick: (e) => {
          //     console.log(id);
          //     navigate('/curriculum/edit', {
          //         state: {
          //           title: title,
          //           detail: detail,
          //           content: content,
          //           effect: effect,
          //           attachment: attachment,
          //           id: id
          //         },
          //       });
          //   }
          // };
        }}
        size="middle" 
      />
    </>
  );
};

export default Commodity;
