/**
 * @swagger
 * tags:
 *  - name: organization
 *    description: create,read & update organization
 *  - name: item
 *    description: create,read & update item
 *  - name: pricing
 *    description: create,read & update pricing structure
 *  - name: calculate price
 *    description: Calculate price dynamically
 * /organization:
 *   get:
 *     summary: Lists all the organization
 *     tags: [organization]
 *     responses:
 *       200:
 *         description: The list of the organization
 *       500:
 *          description: Server Error
 *   post:
 *     summary: Create a new organization
 *     tags: [organization]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization name
 *     responses:
 *       200:
 *         description: Organization saved.
 *       500:
 *         description: Some server error
 *       409:
 *          description: Organization already exist
 *   put:
 *     summary: Update name of organization
 *     tags: [organization]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: String
 *         description: The organization id
 *       - in: query
 *         name: name
 *         schema:
 *           type: String
 *         description: The organization name
 *     responses:
 *       200:
 *         description: Organization updated.
 *       500:
 *         description: Some server error
 *       400:
 *          description: Missing required query parameters.
 * /organization/{name}:
 *   get:
 *     summary: Get organization id by its name 
 *     tags: [organization]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization name
 *     responses:
 *       200:
 *         description: The organization id
 *       404:
 *         description: The organization was not found
 * /item:
 *   get:
 *     summary: Lists all the item
 *     tags: [item]
 *     responses:
 *       200:
 *         description: The list of the item
 *       500:
 *          description: Server Error
 *   post:
 *     summary: Create a new item
 *     tags: [item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              required:
 *                - type
 *                - description
 *              properties:
 *                  type:
 *                      type: string
 *                      description: The type of your item
 *                      enum: [perishable,non-perishable]
 *                      example: perishable
 *                  description:
 *                      type: string
 *                      description: The item details
 *     responses:
 *       200:
 *         description: item saved.
 *       500:
 *         description: Some server error
 *       409:
 *          description: item already exist
 *       400:
 *          description: Missing required body
 *   put:
 *     summary: Update title or description of item by its id
 *     tags: [item]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: Integer
 *         required: true
 *         description: The item id
 *       - in: query
 *         name: type
 *         schema:
 *           type: String
 *         description: The item type
 *       - in: query
 *         name: description
 *         schema:
 *           type: String
 *         description: The item description
 *     responses:
 *       200:
 *         description: item updated.
 *       500:
 *         description: Some server error
 *       400:
 *          description: Missing required query parameters.
 * /item/{id}:
 *   get:
 *     summary: Get item by its id 
 *     tags: [item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item
 *       404:
 *         description: The item was not found
 * /pricing:
 *   get:
 *     summary: Lists all the pricing structure
 *     tags: [pricing]
 *     responses:
 *       200:
 *         description: The list of the pricing structure
 *       500:
 *          description: Server Error
 *   post:
 *     summary: Create a new pricing structure
 *     tags: [pricing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              required:
 *                - organization_id
 *                - item_id
 *                - zone
 *                - base_distance_in_km
 *                - km_price
 *                - fix_price
 *              properties:
 *                  organization_id:
 *                      type: Integer
 *                      example: 1
 *                  item_id:
 *                      type: Integer
 *                      example: 1
 *                  zone:
 *                      type: string
 *                      example: central
 *                  base_distance_in_km:
 *                      type: string
 *                      example: 5
 *                  km_price:
 *                      type: string
 *                      example: 1.5
 *                  fix_price:
 *                      type: string
 *                      example: 10
 *     responses:
 *       200:
 *         description: pricing structure saved.
 *       500:
 *         description: Some server error
 *       409:
 *          description: pricing structure already exist
 *       400:
 *          description: Missing required body
 * /pricing/{organization_id}:
 *   get:
 *     summary: Get pricing structure by organization id 
 *     tags: [pricing]
 *     parameters:
 *       - in: path
 *         name: organization_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The organization id
 *     responses:
 *       200:
 *         description: The pricing structure
 *       404:
 *         description: The organization_id was not found
 * /pricing/{id}:
 *   put:
 *     summary: Update pricing structure by its id
 *     tags: [pricing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: Integer
 *         description: The pricing id (required)
 *       - in: query
 *         name: organization_id
 *         schema:
 *           type: String
 *         required: false
 *         description: New organization id (optional)
 *       - in: query
 *         name: item_id
 *         schema:
 *           type: String
 *         required: false
 *         description: New item id (optional)
 *       - in: query
 *         name: zone
 *         schema:
 *           type: String
 *         required: false
 *         description: New zone (optional)
 *       - in: query
 *         name: base_distance_in_km
 *         schema:
 *           type: Float
 *         required: false
 *         description: New base distance in km (optional)
 *       - in: query
 *         name: km_price
 *         schema:
 *           type: Flaot
 *         required: false
 *         description: New km price (optional)
 *       - in: query
 *         name: fix_price
 *         schema:
 *           type: Float
 *         required: false
 *         description: New fix price (optional)
 *     responses:
 *       200:
 *         description: pricing structure updated.
 *       500:
 *         description: Some server error
 *       400:
 *          description: Missing required query parameters.
 * /calculate:
 *   get:
 *     summary: Price for given set of query parameters
 *     tags: [calculate price]
 *     parameters:
 *       - in: query
 *         name: organization_id
 *         schema:
 *           type: Integer
 *         example: 1
 *       - in: query
 *         name: item_type
 *         schema:
 *           type: String
 *         enum: [perishable,non-perishable]
 *         example: perishable
 *       - in: query
 *         name: zone
 *         schema:
 *           type: String
 *         example: central
 *       - in: query
 *         name: total_distance
 *         schema:
 *           type: Float
 *         example: 12
 *     responses:
 *       200:
 *         description: Dynamic price
 *       400:
 *          description: pricing structure for given parameters does not exist
 */

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const conString=process.env.DATABASE_URL;
const db = new pg.Client(conString);

await db.connect();

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Get all organization id and name
app.get("/organization",async (req,res)=>{
    try{
        const data=await db.query("SELECT * FROM organization ORDER BY id");
        res.status(200).json({"organizations":data.rows});
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Get organization id by its name 
app.get("/organization/:name",async (req,res)=>{
    try{
        const { name }=req.params;
        if(name === ':name'){
            res.status(400).json({"error":"Missing organization name parameter"});
        }else{
            const data=await db.query("SELECT id FROM organization WHERE name = $1",[name]);
            if(data.rowCount == 0){
                res.status(404).json({"error":`organization with name ${name} does not exist`});
            }
            else {
                res.status(200).json({"organization":data.rows});
            }
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//To create organization and its pricing structure
app.post("/organization",async (req,res)=>{
    try{
        //check if organization name is already present
        const {name} = req.query;
        const data=await db.query("SELECT id FROM organization WHERE name = $1",[name]);
        if(data.rowCount == 0){
            //create organization
            const idPer=1,idNon=2;//temporary id for perisable item = 1 and non-perisable = 2
            let organization_id=await db.query("INSERT INTO organization(name) VALUES($1) RETURNING id",[name]);
            organization_id=organization_id.rows[0].id;
            res.status(200).json({"message":"Successfully saved organization.","organization_id":organization_id});
        }else{
            res.status(409).json({"error":`Organization with name '${name}' already exist.Try using some different name`});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//update name of organization
app.put("/organization",async (req,res)=>{
    const { id,name }=req.query;
    try{
        if(name && id){
            await db.query("UPDATE organization SET name=$1 WHERE id = $2",[name,id]);
            res.status(200).json({"message":"Successfully updated"});
        }else{
            res.status(400).json({"error":"Missing required query parameters."});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Get all items id,type and description
app.get("/item",async (req,res)=>{
    try{
        const data=await db.query("SELECT * FROM item ORDER BY  id");
        res.status(200).json({"items":data.rows});
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Get item type,description by its id
app.get("/item/:id",async (req,res)=>{
    try{
        const { id }=req.params;
        if(id === ':id'){
            res.status(400).json({"error":"Missing item id parameter"});
        }else{
            const data=await db.query("SELECT * FROM item WHERE id = $1",[id]);
            if(data.rowCount == 0){
                res.status(404).json({"error":`item with id ${id} does not exist`});
            }
            else {
                res.status(200).json({"item":data.rows});
            }
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Post item type and description
app.post("/item",async (req,res)=>{
    try{
        //check if item type and description is already present
        const { type,description } = req.body;
        if(type && description){
            const data=await db.query("SELECT id FROM item WHERE type = $1 AND description = $2",[type,description]);
            if(data.rowCount == 0){
                //create item
                let item_id=await db.query("INSERT INTO item(type,description) VALUES($1,$2) RETURNING id",[type,description]);
                item_id=item_id.rows[0].id;
                res.status(200).json({"message":"Successfully saved.","item_id":item_id});
            }else{
                res.status(409).json({"error":`Item with given type and description already exist.`});
            }
        }else{
            res.status(400).json({"error":"Missing required body"});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

app.put("/item",async (req,res)=>{
    const { id,type,description }=req.query;
    try{
        if(id && (type || description)){
            if(type && description){
                await db.query("UPDATE item SET type=$1 , description=$2 WHERE id = $3",[type,description,id]);
            }else if(type){
                await db.query("UPDATE item SET type=$1 WHERE id = $2",[type,id]);
            }else{
                await db.query("UPDATE item SET description=$1 WHERE id = $2",[description,id]);
            }
            res.status(200).json({"message":"Successfully updated"});
        }else{
            res.status(400).json({"error":"Missing required query parameters."});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Get all pricing data
app.get("/pricing",async (req,res)=>{
    try{
        const data=await db.query("SELECT * FROM pricing");
        res.status(200).json({"pricing":data.rows});
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Get pricing data based on organization id 
app.get("/pricing/:organization_id",async (req,res)=>{
    try{
        const { organization_id }=req.params;
        if(organization_id === ':name'){
            res.status(400).json({"error":"Missing organization_id parameter"});
        }else{
            const data=await db.query("SELECT * FROM pricing WHERE organization_id = $1",[organization_id]);
            if(data.rowCount == 0){
                res.status(404).json({"error":`pricing with organization_id '${organization_id}' does not exist`});
            }
            else {
                res.status(200).json({"pricing":data.rows});
            }
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//Post pricing structure 
app.post("/pricing",async (req,res)=>{
    try{
        const {organization_id,item_id,zone,base_distance_in_km,km_price,fix_price}=req.body;
        //check if given pricing model already exist
        let data=await db.query("SELECT id FROM pricing WHERE organization_id=$1 AND item_id=$2 AND zone=$3;",[organization_id,item_id,zone]);
        if(data.rowCount === 0){
            //check if given item id and organization id is valid.
            data=await db.query("SELECT * FROM organization WHERE id = $1",[organization_id]);
            if(data.rowCount === 0){
                res.status(404).json({"error":`organization_id '${organization_id}' does not exist`});
            }else{
                data=await db.query("SELECT * FROM item WHERE id = $1",[item_id]);
                if(data.rowCount === 0){
                    res.status(404).json({"error":`item_id '${item_id}' does not exist`});
                }
                else{
                    data=await db.query("INSERT INTO pricing(organization_id,item_id,zone,base_distance_in_km,km_price,fix_price) VALUES($1,$2,$3,$4,$5,$6) RETURNING id;",[organization_id,item_id,zone,base_distance_in_km,km_price,fix_price]);
                    const pricing_id=data.rows[0].id;
                    res.status(200).json({"message":"Successfully saved.","pricing_id":pricing_id});
                }
            }
        }else{
            res.status(409).json({"error":`Pricing model for given organization_id,item_id and zone already exist.Atleast one of the three must be different.`});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

//update pricing modal
app.put("/pricing/:id",async (req,res)=>{
    try{
        const { id }=req.params;
        if(id && req.query){
            let data=await db.query("SELECT * from pricing WHERE id=$1;",[id]);
            if(data.rowCount == 0){
                res.status(404).json({"error":`pricing with id '${id}' does not exist`});
            }else{
                
                let queryString="";
                let valueArr=Array(0);
                let i=1;
                for(const key in req.query){
                    queryString+=key+`=$${i} ,`;
                    i++;
                    valueArr.push(req.query[key]);
                }
                valueArr.push(id);
                queryString=`UPDATE pricing SET ${queryString.substring(0,queryString.length-1)} WHERE id=$${i}`;
                await db.query(queryString,valueArr);
                res.status(200).json({"message":"Successfully updated"});
            }
        }
        else{
            res.status(400).json({"error":"Missing required parameters."});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

async function getItemDetail(id,type){
    try{
        const data=await db.query("SELECT * from item WHERE id=$1 AND type=$2",[id,type]);
        return data;
    }catch(err){
        throw err;
    }
}

function calculatePrice(total_distance,base_distance_in_km,km_price,fix_price){
    if(base_distance_in_km <= total_distance){  
        let price=fix_price+(total_distance-base_distance_in_km)*km_price;
        price=Math.round(price*100)/100;
        return price;
    }else{
        return fix_price;
    }
}
//Get price
app.get("/calculate",async (req,res)=>{
    try{
        const { zone,organization_id,total_distance,item_type }=req.query;
        if(zone && organization_id && total_distance && item_type){
            const data=await db.query("SELECT * FROM pricing WHERE zone=$1 AND organization_id=$2;",[zone,organization_id]);
            //For a given zone and organization it can have atmost two different items (perishable/non-perishable)
            if(data.rowCount === 0){
                res.status(400).send({"error":"pricing structure for given parameters does not exist"});
            }else if(data.rowCount === 1){
                const itemDetail=await getItemDetail(data.rows[0].item_id,item_type);
                console.log(itemDetail);
                if(itemDetail.rowCount === 0){
                    res.status(400).send({"error":"pricing structure for given parameters does not exist"});
                }
                else{
                    const {base_distance_in_km,km_price,fix_price}=data.rows[0];
                    const price=calculatePrice(parseFloat(total_distance),parseFloat(base_distance_in_km),parseFloat(km_price),parseFloat(fix_price));
                    res.status(200).json({"price":price});
                }
            }else{
                let itemDetail=await getItemDetail(data.rows[0].item_id,item_type);
                if(itemDetail.rowCount === 0){
                    itemDetail=await getItemDetail(data.rows[1].item_id,item_type);
                    if(itemDetail.rowCount === 0){
                        res.status(400).send({"error":"pricing structure for given parameters does not exist"});
                    }else{
                        const {base_distance_in_km,km_price,fix_price}=data.rows[1];
                        const price=calculatePrice(parseFloat(total_distance),parseFloat(base_distance_in_km),parseFloat(km_price),parseFloat(fix_price));
                        res.status(200).json({"price":price});
                    }
                }
                else{
                    const {base_distance_in_km,km_price,fix_price}=data.rows[0];
                    const price=calculatePrice(parseFloat(total_distance),parseFloat(base_distance_in_km),parseFloat(km_price),parseFloat(fix_price));
                    res.status(200).json({"price":price});
                }
            }
        }else{
            res.status(400).json({"error":"Missing required query parameters."});
        }
    }catch(err){
        res.status(500).json({"error":err});
    }
});

export {app};