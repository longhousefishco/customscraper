import Puppeteer from "puppeteer";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

//login
const browser = await Puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto("https://learn-2.galvanize.com/");
await page.waitForSelector(".form-control.string.email.optional");
await page.type(".form-control.string.email.optional", process.env.username);
await page.waitForSelector(".form-control.password.optional");
await page.type(".form-control.password.optional", process.env.password);
await page.waitForSelector('input[type="submit"]');
await page.click('input[type="submit"]');

// Scrape .md links and text content

// Convert extracted data to CSV and save
