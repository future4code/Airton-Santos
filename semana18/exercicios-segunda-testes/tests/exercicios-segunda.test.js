test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 50
	})
})