function Card(props) {
    return(
        <>
            <div class="card">
            <div class="image-container"></div>
            <div class="card-content">
                <div class="stats">
                    <p class="region-tag">{props.trainer.region}</p>
                    <div class="rank">
                        <p class="rank-label">rango</p>
                        <p class="rank-tag">{props.trainer.rango}</p>
                    </div>
                </div>
                <h2 class="trainer-name">{props.trainer.name}</h2>
                <div class="team">
                    <h3 class="team-label">Equipo</h3>
                    <div class="team-members">
                        <div class="pokemon-tag">
                            <p class="pokemon-tag--name">Charmander</p>
                            <p class="pokemon-tag--level">Nivel: 24</p>
                        </div>
                        <div class="pokemon-tag">
                            <p class="pokemon-tag--name">Bulbasaur</p>
                            <p class="pokemon-tag--level">Nivel: 31</p>
                        </div>
                        <div class="pokemon-tag">
                            <p class="pokemon-tag--name">Pikachu</p>
                            <p class="pokemon-tag--level">Nivel: 26</p>
                        </div>
                    </div>
                </div>
                <a href="#" class="more-info">más información</a>
            </div>
        </div>
        </>
    );
}

export default Card;